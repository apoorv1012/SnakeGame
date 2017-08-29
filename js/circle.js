let gameCanvas = document.getElementById('snakeCanvas');
let canvasContext = gameCanvas.getContext('2d');

export function createCircle(x,y) {
    canvasContext.beginPath();
    canvasContext.arc(x, y, 2.5, 0, 2*Math.PI);
    canvasContext.fillStyle = 'yellow';
    canvasContext.fill();
    canvasContext.lineWidth = 3;
    canvasContext.strokeStyle = 'black';
    canvasContext.stroke();
}