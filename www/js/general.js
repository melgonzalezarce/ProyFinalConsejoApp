document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        hideNew(this);
    });
}
function hideNew(e) {
    $(e).parents('.hideNew').remove();
}