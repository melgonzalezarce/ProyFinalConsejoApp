/**
 * Created by romarin on 12/8/15.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

}

function showSideNav() {
    $('.button-collapse').sideNav('show');
}

function sendSuggestion() {

}
function onBackKeyDown(e) {
    e.preventDefault();
}