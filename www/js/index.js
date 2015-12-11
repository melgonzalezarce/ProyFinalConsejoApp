document.addEventListener("deviceready", onDeviceReady, false);

var db;

function onDeviceReady() {

    document.addEventListener("online", onOnline, false);

    db = window.openDatabase("consejofmat", "1.0", "Consejo FMAT", 200000);
    db.transaction(populateDBUsers, errorDB);
}

function onOnline() {
    // Enviar mensajes de escribenos y fotos seleccionadas de cada evento.
    alert('Conectado a internet, enviando fotos y mensajes de Escribenos');
}
function populateDBUsers(tx) {
    tx.executeSql('DROP TABLE IF EXISTS users');
    tx.executeSql('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name, password)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, student_name, career, message_type, message)');

    tx.executeSql('INSERT INTO users (name, password) VALUES ("Meli", "123")');
    tx.executeSql('INSERT INTO users (name, password) VALUES ("Romario", "123")');

}

function errorDB(err) {
    alert("Error processing SQL: " + err.code + ", " + err.message);
}

function checkUserCrentendials(tx) {
    tx.executeSql('SELECT * FROM users', [], querySuccessCheckUserCredentials, errorDB);
}

function querySuccessCheckUserCredentials(tx, results) {
    var len = results.rows.length;

    var userName = $('#nombre_usuario').val();
    var password = $('#password').val();

    for (var i = 0; i < len; i++) {
        if (results.rows.item(i).name == userName && results.rows.item(i).password == password) {
            window.location.href = 'novedades.html';
        }
    }
    Materialize.toast('Usuario/Contraseña inválidos', 2000);
}

function login() {
    if($('#nombre_usuario').val() == '' || $('#password').val() == '') {
        Materialize.toast('Completar campos', 2000);
    } else {
        db.transaction(checkUserCrentendials, errorDB);
    }
}
