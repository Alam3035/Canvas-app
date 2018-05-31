class DrawingLine extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.context.strokeStyle = document.getElementById('colorpickerstroke').value;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.lineWidth = document.getElementById('size').valueAsNumber;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
        
    }
    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}

/*
$("#blur").click(function (event) {
    onMouseDown.push()
    this.context.shadowBlur = 10;
    this.context.shadowColor = 'rgb(0, 0, 0)';
    
});
*/