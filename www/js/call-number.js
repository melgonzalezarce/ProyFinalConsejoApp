document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".phonecall").click(function () {
        callNumber(this);
    });
}

function onSuccessCall() {
}

function onErrorCall() {
    alert('Fallo al llamar');
}
function callNumber(phone) {
    var number = $(phone).siblings('.phonenumber').val();
    var bypassAppChooser = true;
    window.plugins.CallNumber.callNumber(onSuccessCall, onErrorCall, number, bypassAppChooser);
}