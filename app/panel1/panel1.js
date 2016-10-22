(function() {
  'use strict';

  angular.module('myApp.panel1', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/panel1', {
      templateUrl: 'panel1/panel1.html',
      controller: 'Panel1Controller'
    });
  }])

  .controller('Panel1Controller', [function() {

  }]);
})();