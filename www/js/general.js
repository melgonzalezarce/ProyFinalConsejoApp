document.addEventListener("deviceready", onDeviceReady, false);
//Manejo de Eventos
function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        $(this).parents('.hideNew').remove();
    });
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

}
//Panel
function showSideNav() {
    $('.button-collapse').sideNav('show');
}


function onBackKeyDown(e) {
    e.preventDefault();
}
//Camara
