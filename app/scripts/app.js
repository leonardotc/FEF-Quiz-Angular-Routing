'use strict';

/**
 * @ngdoc overview
 * @name routingQuizApp
 * @description
 * # routingQuizApp
 *
 * Main module of the application.
 */

angular
  .module('routingQuizApp',[]);


angular
  .module('routingQuizApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/instructions.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('blue-bricks', {
        url: '/bricks/blue',
        templateUrl: 'views/bricks.html',
        controller: 'BlueBricksCtrl as brick'
      })
      .state('green-bricks', {
        url: '/bricks/green',
        templateUrl: 'views/bricks.html',
        controller: 'GreenBricksCtrl as brick'
      })
      .state('red-bricks', {
        url: '/bricks/red',
        templateUrl: 'views/bricks.html',
        controller: 'RedBricksCtrl as brick'
      })
      .state('red-bricks.cart', {
        url: '/bricks/red/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('blue-bricks.cart', {
        url: '/bricks/red/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      .state('green-bricks.cart', {
        url: '/bricks/red/cart',
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl as cart'
      })
      ;

  }]);
  