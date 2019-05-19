'use strict';

function Router(routes){

	try{
		
		if(!routes){
			throw 'Error: Routes parameter is mandatory!';
		}
		this.constructor(routes);
		this.init();

	}catch(e){
		console.error(e);
	}

}

Router.prototype = {

	routes: undefined,
	rootElem: undefined,
	// routeSet: undefined,

	constructor: function(routes){
		this.routes = routes;
		this.rootElem = document.getElementById("pagingbita");
	},

	init: function(){

		let r = this.routes;
		(function(scope, r){

			window.addEventListener('hashchange', function(e){
				scope.hasChanged(scope, r);
			});

		})(this, r);

		this.hasChanged(this, r);
	
	},

	hasChanged: function(scope, r){
		if (window.location.hash.length > 0) {

			for(var i = 0, len = r.length; i < len; i++){
				var route = r[i];

				if (route.isActiveRoute(window.location.hash.substr(1))) {
					scope.goToRoute(route.htmllink);
					
					let root1 = route;
					setTimeout(() => root1.func() , 1000);
				}
			}

		}else{

			for(var i = 0, len = r.length; i < len; i++){
				var route = r[i];

				if (route.defaultRoute) {
					scope.goToRoute(route.htmllink);
					window.location.hash = '#index';

					let root2 = route;
					setTimeout(() => root2.func , 500);
				}
			}

		}

	},

	// getSingleRoute: function(){
	// 	return this.routeSet;
	// },

	runSingleRoute: function(func){
		return func;
	},

	goToRoute: function(htmllink){
		
		(function(scope){

			let url = 'views/' + htmllink,
				xmlhr = new XMLHttpRequest();

			xmlhr.onreadystatechange = function(){
				if(this.readyState === 4 && this.status === 200){
					scope.rootElem.innerHTML = this.responseText;
				}
			};

			xmlhr.open('GET', url, true);
			xmlhr.send();

		})(this);

	}

};

