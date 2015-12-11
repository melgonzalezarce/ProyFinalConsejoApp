document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

    $('.howToArrive').click(function () {
        var latlng = $(this).siblings('.latlng').val();
        window.localStorage.setItem("destination", latlng);
    });
}
function onBackKeyDown(e) {
    e.preventDefault();
}

function showSideNav() {
    $('.button-collapse').sideNav('show');
}