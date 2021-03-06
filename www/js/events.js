
/**
 * Created by romarin on 12/8/15.
 */
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

    $('#versionCordova').text(device.cordova);
    $('#modelo').text(device.model);
    $('#plataforma').text(device.platform);
    $('#versionSO').text(device.version);
}

function onBackKeyDown(e) {
    e.preventDefault();
}

function showSideNav() {
    $('.button-collapse').sideNav('show');
}