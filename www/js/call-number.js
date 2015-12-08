document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('hola');
    $(".phonecall").click(function () {
        alert('dos');
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
    alert(number);
    var bypassAppChooser = true;
    window.plugins.CallNumber.callNumber(onSuccessCall, onErrorCall, number, bypassAppChooser);
}