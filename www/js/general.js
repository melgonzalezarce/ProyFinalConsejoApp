document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        $(this).parents('.hideNew').remove();
    });
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

}

function showSideNav() {
    $('.button-collapse').sideNav('show');
}


function onBackKeyDown(e) {
    e.preventDefault();
}

