document.addEventListener("deviceready", onDeviceReady, false);
var pictureSource;
var destinationType;

function onDeviceReady() {
    $(".hideNewBtn").click(function () {
        $(this).parents('.hideNew').remove();
    });
    document.addEventListener("backbutton", onBackKeyDown, false);
    document.addEventListener("volumeupbutton", showSideNav, false);

    //Camara
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;

}
//Panel
function showSideNav() {
    $('.button-collapse').sideNav('show');
}

function onBackKeyDown(e) {
    e.preventDefault();
}

function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('imagenPerfil');
    smallImage.src = "data:image/jpeg;base64," + imageData;
}
function onFail() {
    alert('Falla al iniciar la camara ' + message);
}
function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50, destinationType: destinationType.DATA_URL
    });
    $('#modal1').closeModal();
}
function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById('imagenPerfil');
    largeImage.src = imageURI;
}
function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 50, destinationType: destinationType.FILE_URI, sourceType: source
    });
    $('#modal1').closeModal();
}