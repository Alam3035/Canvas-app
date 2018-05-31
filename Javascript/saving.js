let button_download = document.getElementById('btn-download');
button_download.addEventListener('click', function(e) {
    var dataURL = canvasReal.toDataURL('image/png');
    button_download.href = dataURL;
});