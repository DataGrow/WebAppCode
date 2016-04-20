angular.module('DataGrow', ['ui.router'])

	.config( function ($stateProvider, $urlRouterProvider ) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
				.state('landing', {
						url: `/`,
						templateUrl: `../partials/landing.html`,
						controller: 'landingCtrl'
				})
        .state('active-units', {
            url: `/units/active`,
            templateUrl: `../partials/active-units.html`,
            controller: 'activeUnitsCtrl'
        })
				.state('active-unit-info', {
						url: `/unit/:unitId`,
						templateUrl: `../partials/active-unit-info.html`,
						controller: 'activeUnitInfoCtrl'
				})
				.state('archived-units', {
            url: `/units/archived`,
            templateUrl: `../partials/archived-units.html`,
            controller: 'archivedUnitsCtrl'
        })
				.state('archived-unit-info', {
						url: `/unit/archive/:unitId`,
						templateUrl: `../partials/archived-unit-info.html`,
						controller: 'archivedUnitInfoCtrl'
				})

    });
