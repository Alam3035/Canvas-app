//repeat button

function draw(direction) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    //var pic = $("").val();
    var pic = $("select").change(function(){
        $(this[this.selectedIndex]).val();
       });
    var img = document.getElementById("pic");
    var pat = ctx.createPattern(img, direction);
    ctx.globalAlpha = 0.4; 
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = pat;
    ctx.fill();
}