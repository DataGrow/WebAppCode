angular.module('DataGrow', ['ui.router'])

	.config( function ($stateProvider,$urlRouterProvider ) {


    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
        .state(' Dashboard ', {
            url: `/dashboard/home`,
            templateUrl: `../views/dashboard.html`,
            controller: 'mainCtrl'
        })

    });