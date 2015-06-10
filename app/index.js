angular.module('sonataApp',['ui.router'])
	.config(function ($stateProvider, $urlRouterProvider) {
		
		 $urlRouterProvider.otherwise("/");

		  $stateProvider
		  	.state('login', {
		      url: "/",
		      templateUrl: "app/views/login.html"
		    })
		    .state('register', {
		      url: "/register",
		      templateUrl: "app/views/register.html",
		      controller : "registerCtrl"
		    })
		    .state('dashboard', {
		      url: "/dashboard",
		      templateUrl: "app/views/dashboard.html"
		    })

	});


  