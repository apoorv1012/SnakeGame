let gameCanvas = document.getElementById('snakeCanvas');
let canvasContext = gameCanvas.getContext('2d');

export function createRectangle(x, y) {
    canvasContext.fillRect(0, 0, x, y);
}