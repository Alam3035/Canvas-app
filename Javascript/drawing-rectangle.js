class DrawingRectangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextReal.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextReal.lineWidth = document.getElementById('size').valueAsNumber;
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.contextDraft.fillStyle = document.getElementById('colorpickerfill').value;
        this.contextDraft.lineWidth = document.getElementById('size').valueAsNumber;
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY)
    }

    onMouseMove() {}
    onMouseUp(coord) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.fillRect(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
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