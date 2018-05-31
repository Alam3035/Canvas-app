canvasReal.clearCanvas = function() {
    contextReal.fillStyle = "white";
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
}

$('#ClearAll').on("click", function() {
    canvasReal.clearCanvas();
})