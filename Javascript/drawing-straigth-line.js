class DrawingStraigthLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = document.getElementById('colorpickerstroke').value
        this.contextDraft.strokeStyle = document.getElementById('colorpickerstroke').value
        this.contextReal.lineCap = "round";
        this.contextDraft.lineCap = "round";
        this.contextReal.lineWidth = document.getElementById('size').valueAsNumber;
        this.contextDraft.lineWidth = document.getElementById('size').valueAsNumber;
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.origX, this.origY);
    }
    onDragging(coord, event) {
        dragging = true;
        this.contextDraft.closePath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.origX, this.origY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }
    onMouseUp(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        this.onFinish();
    }
    onFinish() {
        undoObject.states[undoObject.actionCount] = new Image();
        undoObject.states[undoObject.actionCount].src = canvasReal.toDataURL();
        undoObject.actionCount++;
    }
}