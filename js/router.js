'use strict';

function Router(routes) {
    try {
        if (!routes) {
            throw 'error: routes param is mandatory';
        }
        this.constructor(routes);
        this.init();
    } catch (e) {
        console.error(e);   
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('pagingbita');
        // console.log(this);
    },
    init: function () {
        var r = this.routes;
        /**
         *  [console.log(r);]
         *
         *  (3) [Route, Route, Route]
         *  0: Route {name: "index", htmlName: "index-content.html", default: true}
         *  1: Route {name: "about", htmlName: "about.html", default: undefined}
         *  2: Route {name: "portfolio", htmlName: "portfolio.html", default: undefined}
         *  length: 3
         *  __proto__: Array(0)
         *
         */
        (function(scope, r) { 
            window.addEventListener('hashchange', function (e) {
                // console.log(r);
                // console.log(scope); //object itself 
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.hasChanged(this, r);
    },
    hasChanged: function(scope, r){
        // console.log(r);
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.htmlName);
                }
            }
        } else {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if(route.default) {
                    scope.goToRoute(route.htmlName);
                }
            }
        }
    },
    goToRoute: function (htmlName) {
        (function(scope) { 
            var url = 'views/' + htmlName,
                xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
};