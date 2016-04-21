angular.module('dataGrow', ['ui.router'])

	.config( function ($stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
				.state('landing', {
						url: '/',
						templateUrl: './development/partials/landing.html',
						controller: 'landingCtrl'
				})
		        .state('active-units', {
		            url: '/units/active',
		            templateUrl: './development/partials/active-units.html',
		            controller: 'activeUnitsCtrl'
		        })
						.state('active-unit-info', {
								url: '/unit/active/:unitId',
								templateUrl: './development/partials/active-unit-info.html',
								controller: 'activeUnitInfoCtrl'
						})
						.state('archived-units', {
		            url: '/units/archived',
		            templateUrl: './development/partials/archived-units.html',
		            controller: 'arcvhivedUnitsCtrl'
		        })
						.state('archived-unit-info', {
								url: '/unit/archive/:unitId',
								templateUrl: './development/partials/archived-unit-info.html',
								controller: 'archivedUnitInfoCtrl'
						})

    });
