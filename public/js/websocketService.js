angular.module('DataGrow').service('websocketService', function( $http, $q ) {

    let ws = new WebSocket('ws://localhost:8000');

    setInterval(function() {
        console.log(ws.readyState)
    }, 5000);

});