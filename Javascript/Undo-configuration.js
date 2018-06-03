var canvasSettings = {
    undoObject: {
        actionCount: 0,
        states: [],
        savePoint: 0,
        undoAction: function() {
            if (canvasSettings.undoObject.actionCount > 1) {
                canvasSettings.undoObject.actionCount--;
                canvasSettings.undoObject.savePoint = canvasSettings.undoObject.actionCount;
                contextReal.drawImage(canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount - 1], 0, 0);
            }
        },
        redoAction: function() {
            if (canvasSettings.undoObject.actionCount == canvasSettings.undoObject.savePoint && canvasSettings.undoObject.actionCount < canvasSettings.undoObject.states.length) {
                canvasSettings.undoObject.actionCount++;
                canvasSettings.undoObject.savePoint++;
                contextReal.drawImage(canvasSettings.undoObject.states[canvasSettings.undoObject.actionCount - 1], 0, 0);
            } else if (canvasSettings.undoObject.actionCount != canvasSettings.undoObject.savePoint) {
                canvasSettings.undoObject.states.splice(canvasSettings.undoObject.actionCount);
                canvasSettings.undoObject.savePoint = canvasSettings.undoObject.actionCount;
            }
        }
    }
};

console.log("hello");