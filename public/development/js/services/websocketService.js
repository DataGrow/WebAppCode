angular.module('DataGrow').service('websocketService', function( $http, $q ) {

    let ws = new WebSocket('ws://localhost:8000');

    ws.onopen = function() {
        ws.send("Hello, World!");
        alert("Message is sent...")
    };

    ws.onmessage = function (evt) {
        var received = evt.data;
        alert("received message: " + received);
    }

});