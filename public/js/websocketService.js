angular.module('DataGrow').service('websocketService', function( $http, $q ) {

    let ws = new WebSocket('ws://localhost:8000');

    console.log("Hello, World!");

    setInterval(function() {
        console.log(ws.readyState)
    }, 5000);

});