//repeat button



function draw(direction) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    var e = document.getElementById("hero");
    var value = e.options[e.selectedIndex].value;
    var img = document.getElementById(value);
    var pat = ctx.createPattern(img, direction);
    //ctx.globalAlpha = 0.8;
    ctx.rect(0, 0, c.width, c.height);
    ctx.fillStyle = pat;
    ctx.fill();
}