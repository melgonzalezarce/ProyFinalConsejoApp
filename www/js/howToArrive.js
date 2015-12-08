document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    navigator.geolocation.getCurrentPosition(onSuccessPosition, onErrorPosition);
    alert("navigator.geolocation works well");

}

function onErrorPosition() {
    alert('Error');
}
var onSuccessPosition = function (position) {
    var latlng = window.localStorage.getItem('destination');
    alert(latlng);
    var lat = parseFloat(latlng.split(',')[0]);
    var lng = parseFloat(latlng.split(',')[1]);
    initMap(position.coords.latitude, position.coords.longitude, lat, lng);
};

var muestraDirecciones;
var directionService;
function initMap(latitudCelular, longitudCelular, latitudDestino, longitudDestino) {
    var centerCelular = {lat: latitudCelular, lng: longitudCelular};
    var centerDestino = {lat: latitudDestino, lng: longitudDestino};

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerCelular,
        zoom: 12
    });
    muestraDirecciones = new google.maps.DirectionsRenderer();
    muestraDirecciones.setMap(map);
    directionService = new google.maps.DirectionsService();

    mostrarRuta(centerCelular, centerDestino);
}

function mostrarRuta(origen, destino) {

    var request = {
        origin: origen,
        destination: destino,
        travelMode: google.maps.TravelMode.DRIVING // WALKING, BYCICLING, TRANSIT
    };
    directionService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            muestraDirecciones.setDirections(response);
        }
    });

}