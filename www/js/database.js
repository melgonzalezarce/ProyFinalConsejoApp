document.addEventListener("deviceready", onDeviceReady, false);

var db;

function onDeviceReady() {
    db = window.openDatabase("consejofmat", "1.0", "Consejo FMAT", 200000);
    db.transaction(populateDBUsers, errorDB, SuccessDBUsers);

}

function populateDBUsers(tx) {
    tx.executeSql('DROP TABLE IF EXISTS users');
    tx.executeSql('CREATE TABLE IF NOT EXISTS users (id unique, name, password)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS posts (id unique, student_name, carreer, message_type, message)');

    tx.executeSql('INSERT INTO users (id, name, password) VALUES (1, "meli", "123")');

    alert('Base de datos creada de usuarios y posts(escribenos)');
}

function queryDBUsers(tx) {
    tx.executeSql('SELECT * FROM avengers', [], querySuccessUsers, errorDB);
}

// Query the success callback
//
function querySuccessUsers(tx, results) {
}

function errorDB(err) {
    alert("Error processing SQL: " + err.code + ", " + err.message);
}
function SuccessDBUsers() {
    //var db = window.openDatabase("Superheroes", "1.0", "Superheroes", 200000);
    //db.transaction(queryDBUsers, errorDB);
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
            Materialize.toast('Bienvenido ' + userName, 2000);
            window.location.href = 'novedades.html';
        }
    }

    Materialize.toast('Usuario/Contraseña inválidos', 2000);

}
function login() {
    db.transaction(checkUserCrentendials, errorDB);
}
