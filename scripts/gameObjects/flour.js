import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
class Flour extends BaseGameObject {
    name = "Flour";
    yVelocity = 50;
    countDisplay = document.querySelector("#flourCount");

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 25,
            right: this.x + this.width - 25,
            top: this.y + 25,
            bottom: this.y + this.height - 25
        }
        return bounds;
    };

    update = function () {
        this.y += this.yVelocity * global.deltaTime; 

        if (this.y > global.canvas.height) {
            this.active = false;
        }
    }

    reactToCollision = function (collidingObject) {
        switch (collidingObject.name) {
            case "Bowl":
                this.active = false;
                global.recipe.flour -= 1;
                this.countDisplay.innerHTML = global.recipe.flour;
                break;
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["../images/Flour.png"]);
        let random = Math.random() * global.canvas.width - this.width;
        this.x = random;
    }
}

export { Flour }