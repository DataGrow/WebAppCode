angular.module('DataGrow', ['ui.router'])

	.config( function ($stateProvider,$urlRouterProvider ) {


    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
        .state(' Dashboard ', {
            url: `/`,
            templateUrl: `../views/dashboard.html`
        })

    });


    