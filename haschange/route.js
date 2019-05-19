'use strict';

function Route(name, htmllink, fun, defaultRoute){

	try{

		if(!name || !htmllink){
			throw 'error: name and htmllink parameters are mandetory';
		}
		this.constructor(name, htmllink, fun, defaultRoute);

	}catch(e){
		console.error(e);
	}

}


Route.prototype = {
	
	name: undefined,
	htmllink: undefined,
	defaultRoute: undefined,
	func: undefined,

	constructor: function(name, htmllink, fun, defaultRoute){
		this.name = name;
		this.htmllink = htmllink;
		this.defaultRoute = defaultRoute;
		this.func = fun;
	},

	isActiveRoute: function(hashedPath){
		return hashedPath.replace('#', '') === this.name;
	},

	runHelperJs: function(){
		if(typeof this.fun === 'function'){
			return this.fun();
		}
	}

};