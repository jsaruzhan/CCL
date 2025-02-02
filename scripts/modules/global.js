const global = {};

global.canvas = document.querySelector("#canvas");
global.ctx = canvas.getContext("2d");
global.prevTotalRunningTime = 0;
global.deltaTime = 0;
global.allGameObjects = [];
global.playerObject = {};
global.backgroundShift = 0;
global.backgroundMaxShift = -600;
global.scroeDisplay;
global.score = 0;
global.gravityForce = 9.81;
global.pixelsToMeter = 100;
global.restartButton = document.querySelector("#restartButton");
global.restartButtonContainer = document.querySelector("#startOver");
global.letsMix = document.querySelector("#letsMix");
global.letsMixContainer = document.querySelector("#Mix");
global.gameRunning = true;
global.bake = document.querySelector("#letsBake");
global.recipe = {
    "banana": 3,
    "eggs": 2,
    "sugar": 1,
    "flour": 2,
    "vanilla": 2
};

global.getCanvasBounds = function () {
    let bounds = {
        "left": 0,
        "right": this.canvas.width,
        "top": 0,
        "bottom": this.canvas.height
    }

    return bounds;
}

global.checkCollisionWithAnyOther = function (givenObject) {
    for (let i = 0; i < global.allGameObjects.length; i++) {
        let otherObject = global.allGameObjects[i];
        if (otherObject.active == true) {
            let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
            if (collisionHappened) {
                givenObject.reactToCollision(otherObject);
                otherObject.reactToCollision(givenObject);
            }
        }
    }
}

global.detectBoxCollision = function (gameObject1, gameObject2) {
    let box1 = gameObject1.getBoxBounds();
    let box2 = gameObject2.getBoxBounds();
    if (gameObject1 != gameObject2) {
        if (box2.bottom >= box1.top &&
            box2.bottom <= box1.top + 5 && 
            box2.left <= box1.right &&
            box2.right >= box1.left
        ) {
            return true;
        }
    }
    return false;
}

export { global }