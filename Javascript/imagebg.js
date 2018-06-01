 var canvas = document.getElementById('canvas');
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

 //repeat button


 function draw(direction) {
     //var c = document.getElementById('canvas');
     //var ctx = c.getContext('2d');
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     var reader = new FilerReader();
     read.onload = function (event) {
         //var img = document.getElementById('imageLoader')
         var img = new Image();
         img.onload = function () {
             var pat = ctx.createPattern(img, direction);
             ctx.rect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = pat;
             ctx.fill();
         }
         img.src = event.target.result;
     }
     reader.readAsDataURL(e.target.files[0]);
 }

 // var repeatImage = document.getElementsByTagName('button');
 //repeatImage.addEventListener('change', draw, false);

 //function draw(direction) {
 //ctx.clearRect(0, 0, canvas.width, canvas.height);
 //var img = document.getElementById("imageLoader")
 //var pat = ctx.createPattern(img, direction);
 //ctx.rect(0, 0, 150, 100);
 //ctx.fillStyle = pat;
 //ctx.fill();
 //}