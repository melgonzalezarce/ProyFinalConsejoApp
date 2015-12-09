/**
 * Created by romarin on 12/8/15.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(e) {
    e.preventDefault();
}