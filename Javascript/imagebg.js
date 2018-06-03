
function uploadImage() {
    $('#import').trigger('click');
    $('#import').change(function () {
        var uploadImg = new Image();
        uploadImg.onload = function () {
            contextDraft.drawImage(uploadImg, 200, 100);
            currentFunction = new OpenFile(contextReal, contextDraft, uploadImg);
        }
        uploadImg.src = URL.createObjectURL(this.files[0]);
    });
};



/*var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');

 //insert image

 var imageLoader = document.getElementById('imageLoader');
 imageLoader.addEventListener('change', handleImage, false);



 function handleImage(e) {
     var reader = new FileReader();
     reader.onload = function (event) {
         var img = new Image();
         img.onload = function () {
             //canvas.width = img.width;
             //canvas.height = img.height;
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
         }
         img.src = event.target.result;
     }
     reader.readAsDataURL(e.target.files[0]);
 }
 */
