(function() {
	'use strict';

	angular.module('myApp.panel3', ['ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/panel3', {
				templateUrl: 'panel3/panel3.html',
				controller: 'Panel3Controller'
			});
		}])
		.controller('Panel3Controller', [function() {

		}]);
})();