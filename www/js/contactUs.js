document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);

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
function onBackKeyDown(e) {
    e.preventDefault();
}


function addContact(phone) {
    var number = $(phone).siblings('.phonenumber').val();
    var name = $(phone).siblings('h3').text();

    //Creamos el contacto
    var newContact = navigator.contacts.create({
        "displayName": name,
    });

    //Le ponemos telefono
    var phoneNumbers = [];
    phoneNumbers[0] = new ContactField('mobile', number, false);
    newContact.phoneNumbers = phoneNumbers;

    //Le damos su nombre
    newContact.givenName = name.split(' ')[0];
    newContact.familyName = name.split(' ')[1];

    //Lo guardamos
    newContact.save(onSuccessContact, onErrorContact);
}

function onSuccessContact() {
    Materialize.toast('Contacto agregado', 4000);
}

function onErrorContact() {
    Materialize.toast('Fallo el agregar un contacto', 4000);
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
    window.location.href = 'sms:' + number;
}