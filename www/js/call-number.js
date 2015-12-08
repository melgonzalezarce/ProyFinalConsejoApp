function onSuccessCall() {
}

function onErrorCall() {
    alert('Fallo al llamar');
}
function callNumber(callIcon) {
    var number = callIcon.siblings('.phonenumber').val();
    window.plugins.CallNumber.callNumber(onSuccessCall, onErrorCall, number, bypassAppChooser);
}