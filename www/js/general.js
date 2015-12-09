document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        $(this).parents('.hideNew').remove();
    });
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(e) {
    e.preventDefault();
}

