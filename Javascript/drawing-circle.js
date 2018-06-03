class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextReal.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextDraft.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextReal.lineWidth = document.getElementById('size').valueAsNumber;
        this.contextDraft.lineWidth = document.getElementById('size').valueAsNumber;
        this.contextReal.beginPath();
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height); //- to clear draft context before redrawing
        this.contextDraft.beginPath();
        this.contextDraft.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI);
        this.contextDraft.fill();
        this.contextDraft.stroke();
    }
    onMouseMove() {}
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.ellipse(this.origX, this.origY, Math.abs(coord[0] - this.origX), Math.abs(coord[1] - this.origY), 0 * Math.PI / 180, 0, 2 * Math.PI);
        this.contextReal.fill();
        this.contextReal.stroke();
        this.onFinish();
    }
    onMouseLeave() {}
    onMouseEnter() {}
    onFinish() {
        canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount] = new Image();
        canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount].src = canvasReal.toDataURL();
        canvasSettings.undoObject.actionCount++;
    }
}