/**
 * Created by romarin on 12/7/15.
 */

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    alert('hola');
    var ref = cordova.InAppBrowser.open('http://www.sicei.uady.mx/siceiweb/', '_self', 'location=yes');
}