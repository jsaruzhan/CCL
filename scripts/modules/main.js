import { global } from "./global.js";
import { Bowl } from "../gameObjects/bowl.js";
import { Banana } from "../gameObjects/banana.js";
import { Egg } from "../gameObjects/egg.js";
import { Sugar } from "../gameObjects/sugar.js";
import { Vanilla } from "../gameObjects/vanilla.js";
import { Flour } from "../gameObjects/flour.js";

function gameLoop(totalRunningTime) {
    global.deltaTime = totalRunningTime - global.prevTotalRunningTime; // Time in milliseconds between frames
    global.deltaTime /= 1000; // Convert milliseconds to seconds for consistency in calculations
    global.prevTotalRunningTime = totalRunningTime; // Save the current state of "totalRunningTime", so at the next call of gameLoop (== next frame) to calculate deltaTime again for that next frame.
    global.ctx.clearRect(0, 0, global.canvas.width, global.canvas.height); // Completely clear the canvas for the next graphical output 

    for (var i = 0; i < global.allGameObjects.length; i++) { //loop in the (game)loop -> the gameloop is continous anyways.. and on every cylce we do now loop through all objects to execute several operations (functions) on each of them: update, draw, collision detection, ...
        if (global.allGameObjects[i].active == true) {
            global.allGameObjects[i].storePositionOfPreviousFrame();
            global.allGameObjects[i].update();
            global.checkCollisionWithAnyOther(global.allGameObjects[i]);
            global.allGameObjects[i].draw();
        }
    }

    let ingredientsCollected = true;
    let isGameOver = false;
    for (let property in global.recipe) {
        if (global.recipe[property] > 0) {
            ingredientsCollected = false;
        } else if (global.recipe[property] < 0) {
            isGameOver = true;
        }

    }
    if (isGameOver) {
        console.log("game over")
        global.ctx.fillStyle = "burlywood";
        global.ctx.fillRect(0, 100, global.canvas.width, global.canvas.height / 2);
        global.ctx.font = "50px Times New Roman";
        global.ctx.fillStyle = "white";
        global.ctx.fillText("Ooops! Added too much, let's try again!", 100, 200);
        global.restartButtonContainer.style.display = 'block';
        global.playerObject.active = false;
    }

    if (ingredientsCollected) {
        global.ctx.fillStyle = "burlywood";
        global.ctx.fillRect(0, 100, global.canvas.width, global.canvas.height / 2);
        global.ctx.font = "50px Times New Roman";
        global.ctx.fillStyle = "white";
        global.ctx.fillText("All ingredients collected! Ready to mix!", 100, 200);
        global.letsMixContainer.style.display = 'block';
    }

    requestAnimationFrame(gameLoop); 
}

function setupGame() {
    global.playerObject = new Bowl(200, 800, 300, 200);
    setInterval(function () {
        new Banana(0, 0, 150, 150);
    }, 7000);
    setInterval(function () {
        new Egg(0, 0, 100, 130);
    }, 10000);
    setInterval(function () {
        new Sugar(0, 0, 100, 130);
    }, 13000);
    setInterval(function () {
        new Vanilla(0, 0, 100, 130);
    }, 16000);
    setInterval(function () {
        new Flour(0, 0, 100, 130);
    }, 19000);


}

global.restartButton.addEventListener("click", function () {
    location.reload();
})

global.letsMix.addEventListener("click", function() {
    window.location.href = '../html/finish.html'
})

setupGame();
requestAnimationFrame(gameLoop);
