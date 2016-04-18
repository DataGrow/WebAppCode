angular.module('DataGrow', ['ui.router'])

	.config(['$stateProvider','$urlRouterProvider'], function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {


    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
        .state(' Dashboard ', {
            url: `/`,
            templateUrl: `../views/dashboard.html`
        })

    });


    