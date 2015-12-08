document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".phonecall").click(function () {
        callNumber(this);
    });

    $(".sendMsg").click(function () {
        sendSms(this);
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

function sendSms(phone) {
    var number = $(phone).siblings('.phonenumber').val();
    window.location.href = 'sms:'+number;
}