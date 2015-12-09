/**
 * Created by romarin on 12/8/15.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    $(".phonecall").click(function () {
        callNumber(this);
    });

    $(".sendMsg").click(function () {
        sendSms(this);
    });

    $(".addContact").click(function () {
        addContact(this);
    });
}