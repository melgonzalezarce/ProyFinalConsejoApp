document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);

    $('.howToArrive').click(function () {
        var latlng = $(this).siblings('.latlng').val();
        window.localStorage.setItem("destination", latlng);
    });
}
function onBackKeyDown(e) {
    e.preventDefault();
}