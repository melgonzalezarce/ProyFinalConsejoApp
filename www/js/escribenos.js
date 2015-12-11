/**
 * Created by romarin on 12/8/15.
 */
document.addEventListener("deviceready", onDeviceReady, false);
var db;
function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

    db = window.openDatabase("consejofmat", "1.0", "Consejo FMAT", 200000);
}

function showSideNav() {
    $('.button-collapse').sideNav('show');
}

function sendSuggestion() {
    var networkState = navigator.connection.type;

    //Se comenta porque mientas no esta implementado el WebService siempre se guarde en la base de datos local.
    //if(networkState == Connection.NONE) {
        db.transaction(addOfflineSuggestion, errorDB);
    //} else {
        //Enviamos la sugerencia a Web Service
    //}
}

function addOfflineSuggestion(tx) {
    var name = $('#nombre').val();
    var career = $('#carrera').val();
    var message_type = $('input[name=group1]:checked').val();
    var message = $('#mensaje').val();

    //alert('INSERT INTO posts (student_name,career, message_type, message) ' +
    //    'VALUES ("' + name + '", "' + career + '", "' + message_type + '","' + message + '")');

    tx.executeSql('INSERT INTO posts (student_name,career, message_type, message) ' +
        'VALUES ("' + name + '", "' + career + '", "' + message_type + '","' + message + '")');

    $('input[type=text]').val('');
    $('textarea').val('');

    Materialize.toast('Mensaje enviado', 2000);
}

function onBackKeyDown(e) {
    e.preventDefault();
}

function errorDB(err) {
    alert("Error processing SQL: " + err.code + ", " + err.message);
}