document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    $('.howToArrive').click(function () {
        var latlng = $(this).siblings('.latlng').val();
        window.localStorage.setItem("destination", latlng);
    });
}