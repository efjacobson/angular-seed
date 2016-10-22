(function() {
	'use strict';

	angular.module('myApp.panel2', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/panel2', {
	    templateUrl: 'panel2/panel2.html',
	    controller: 'Panel2Controller'
	  });
	}])

	.controller('Panel2Controller', [function() {

	}]);
})();