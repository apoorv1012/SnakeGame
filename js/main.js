import { createCircle } from 'circle';
import { createRectangle } from 'frame';

var Snake = function(snakeLength, circleSize) {
    this.snakeLength = snakeLength > 10 ? 10 : snakeLength;
    this.circleSize = circleSize;
}

Snake.prototype = function() {

var frameX = 400;
var frameY = 400;
var snakeParts = [];
var snakeDirection = "";
var snakeInterval;
var targetX;
var targetY;
var circleSize;

var initSnake = function() {
    for(var index=this.snakeLength-1;  index>=0; index--) {
        snakeParts.push({x: index, y: 0});
    }
    snakeDirection = "Right";
    circleSize = this.circleSize;
    createSnake();
    createTargetCircle();
    bindEvents();
    snakeInterval = setInterval(moveSnake, 80);
};

var createSnake = function() {
    createRectangle(frameX, frameY);
    for(var index=snakeParts.length-1; index>=0; index--) {
        createCircle(snakeParts[index].x * circleSize, snakeParts[index].y * circleSize);
    }
    createCircle(targetX, targetY);
};

var targetHit = function() {
    if (snakeParts[0].x === targetX && snakeParts[0].y === targetY) {
        return true;
    } else {
        return false;
    }
};

var isTargetOverlap = function() {
    var isOverlap = false;
    for(var index=snakeParts.length-1; index>=0; index--) {
        if (snakeParts[index].x === targetX || snakeParts[index].y === targetY) {
            isOverlap = true;
            break;
        }
    }
    return isOverlap;
};

var createTargetCircle = function() {
    targetX = Math.floor(Math.random() * (400));
    targetY = Math.floor(Math.random() * (400));
    targetX = parseInt(targetX / circleSize);
    targetY = parseInt(targetY / circleSize);
    targetX = 75;
    targetY = 75;
    if (isTargetOverlap()) {
        createTargetCircle();
    }
};

var wallCollision = function() {
    if (snakeParts[0].x === (frameX / circleSize) || snakeParts[0].x === -1 || snakeParts[0].y === (frameY / circleSize) || snakeParts[0].y === -1) {
        return true;
    }
};

var selfCollision = function() {
    var isCollision = false;
    for(var index=1; index<snakeParts.length; index++) {
        if ((snakeParts[0].x === snakeParts[index].x) && (snakeParts[0].y === snakeParts[index].y)) {
            isCollision = true;
        }
    }
    return isCollision;
};

var moveSnake = function() {
    var headPart = snakeParts[0];
    var headPartX = headPart.x;
    var headPartY = headPart.y;

    if (!targetHit()) {
        snakeParts.pop();
    }

    if (wallCollision() || selfCollision()) {
        clearInterval(snakeInterval);
    }

    if (snakeDirection === 'Right') {
        headPartX++;
    }
    if (snakeDirection === 'Left') {
        headPartX--;
    }
    if (snakeDirection === 'Up') {
        headPartY--;
    }
    if (snakeDirection === 'Down') {
        headPartY++;
    }

    snakeParts.unshift({
        x: headPartX,
        y: headPartY
    });

    createSnake();
};

var eventList = function(event) {
    clearInterval(snakeInterval);
    var key = event.key;
    snakeDirection = key.substring(5, key.length);
    snakeInterval = setInterval(moveSnake, 80);
};

var bindEvents = function() {
    document.addEventListener('keydown', eventList);
};

return {
    initSnake: initSnake
}
}();

var snakeGame = new Snake(10, 10);
snakeGame.initSnake();