
function loadImage(event) {
    var cover = document.getElementById('cover');
    var reader = new FileReader();
    reader.onload = function(){
        cover.style.backgroundImage = 'url(' + reader.result + ')';
    };
    reader.readAsDataURL(event.target.files[0]);
}

function changeBackgroundColor(event) {
    var cover = document.getElementById('cover');
    cover.style.backgroundColor = event.target.value;
}

function changeCoverMessage(event) {
    var coverText = document.getElementById('coverText');
    coverText.innerText = event.target.value;
}

function changeFontSize(event) {
    var coverText = document.getElementById('coverText');
    coverText.style.fontSize = event.target.value + 'px';
}

function changeFontColor(event) {
    var coverText = document.getElementById('coverText');
    coverText.style.color = event.target.value;
}
