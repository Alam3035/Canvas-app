class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }
    onMouseDown(coord, event) {
        this.contextReal.strokeStyle = "#f44";
        this.contextReal.fillStyle = "#f44";
        this.contextDraft.strokeStyle = "#f44";
        this.contextDraft.fillStyle = "#f44";
        this.contextReal.lineWidth = 5;
        this.contextDraft.lineWidth = 5;
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
}