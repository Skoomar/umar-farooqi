// Constants
const GAME_SPEED = 90;
const CANVAS_BORDER_COLOUR = 'black';
const CANVAS_BACKGROUND_COLOUR = 'white';
const SNAKE_COLOUR = 'lightgreen';
const SNAKE_BORDER_COLOUR = 'darkgreen';
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = 'darkred';

let snake = [
    {x: 150, y: 150},
    {x: 140, y: 150},
    {x: 130, y: 150},
    {x: 120, y: 150},
    {x: 110, y: 150}
];

let gameEnded = false;
let foodX;
let foodY;
let score = 0;
let dx = 10;
let dy = 0;
let changingDirection = false;

// get the canvas element
const gameCanvas = document.getElementById("gameCanvas");

// return a 2d drawing context
const ctx = gameCanvas.getContext("2d");

// select the colour to fill the canvas
ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
// select the colour for the canvas border
ctx.strokeStyle = CANVAS_BORDER_COLOUR;

// draw a "filled" rectangle to cover the entire canvas
ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
// draw a border around the entire canvas
ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);


main();
createFood();
document.addEventListener("keydown", changeDirection);
document.addEventListener("touchstart", changeDirection);
document.addEventListener("touchmove", changeDirection);
document.addEventListener("touchend", changeDirection);
document.addEventListener("touchcancel", changeDirection);

/**
 * Main game-loop
 */
function main() {
    if (didGameEnd()) {
        drawEndgame();
        gameEnded = true;
        return;
    }
    setTimeout(function onTick() {
        changingDirection = false;
        clearCanvas();
        drawFood();
        advanceSnake();
        drawSnake();
        main();
    }, GAME_SPEED)
}

/**
 * Checks if snake eats itself
 */
function didGameEnd() {
    for (let i = 4; i < snake.length; i++) {
        const didCollide = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
        if (didCollide) return true;
    }
}

/**
 * Resets position of snake and food and starts game again
 */
function restartGame() {
    snake = [
        {x: 150, y: 150},
        {x: 140, y: 150},
        {x: 130, y: 150},
        {x: 120, y: 150},
        {x: 110, y: 150}
    ];
    score = 0;
    document.getElementById('score').innerHTML = "Score: " + score;
    dx = 10;
    dy = 0;
    changingDirection = false;

    if (gameEnded) {
        gameEnded = false;
        main();
    }
    createFood();
}

/**
 * Draws snake on canvas
 */
function drawSnake() {
    // loop through the snake parts drawing each part on the canvas
    snake.forEach(drawSnakePart)
}

/**
 *  draws a part of a snake on canvas
 * @param { object } snakePart - coords where part should be drawn
 */
function drawSnakePart(snakePart) {
    // set colour of snake part
    ctx.fillStyle = SNAKE_COLOUR;

    // set border colour of snake part
    ctx.strokeStyle = SNAKE_BORDER_COLOUR;

    // draw a filled rectangle to represent snake part at coords
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);

    // draw border around snake part
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

/**
 * Modulus function because JavaScript's % is bullshit by itself
 */
function mod(n, m) {
    return ((n % m) + m) % m;
}

/**
 * update snake's position
 */
function advanceSnake() {
    const head = {x: mod(snake[0].x + dx, gameCanvas.width), y: mod(snake[0].y + dy, gameCanvas.height)};
    snake.unshift(head);

    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood) {
        score += 1;
        document.getElementById('score').innerHTML = "Score: " + score;
        createFood();
    } else {
        snake.pop();
    }
}

/**
 * Handles user input to change snake direction
 */
function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    if (changingDirection) return;

    changingDirection = true;

    const keyPressed = event.keyCode;
    // triple equals is like == + 1 (strict equality)
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;

    // make sure the snake can't go the opposite way it's already going
    if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
    }

    if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
    }

    if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
    }
}

/**
 * Generates a random multiple of 10 within specified range
 * @param { number } min - minimum number the random number can be
 * @param { number } max - maximum number the random number can be
 */
function randomTen(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10
}

/**
 * Gets a random position to place food and places it if the snake has eaten it already
 */
function createFood() {
    foodX = randomTen(0, gameCanvas.width - 10);
    foodY = randomTen(0, gameCanvas.height - 10);

    snake.forEach(function isFoodOnSnake(part) {
        if (part.x == foodX && part.y == foodY) createFood();
    });
}

/**
 * Draws food onto canvas
 */
function drawFood() {
    ctx.fillStyle = FOOD_COLOUR;
    ctx.strokeStyle = FOOD_BORDER_COLOUR;
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}


function drawEndgame() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    //ctx.textAlign = "center";
    //ctx.fillText("ey", 10, 50);
    //ctx.fillText("lol", 10, 70)
    ctx.fillText("Game Ended\nScore: " + score, 10, 50);
}

/**
 * Resets canvas and removes snake and food to be re-drawn
 */
function clearCanvas() {
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.strokeStyle = CANVAS_BORDER_COLOUR;

    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0, 0, gameCanvas.width, gameCanvas.height);
}