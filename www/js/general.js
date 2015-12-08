document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        $(this).parents('.hideNew').remove();
    });
}

