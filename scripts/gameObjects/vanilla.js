import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
class Vanilla extends BaseGameObject {
    name = "Vanilla";
    yVelocity = 50;
    countDisplay = document.querySelector("#vanillaCount")

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
                global.recipe.vanilla -= 1;
                this.countDisplay.innerHTML = global.recipe.vanilla;
                break;
        }
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["../images/Vanilla.png"]);
        let random = Math.random() * global.canvas.width - this.width;
        this.x = random;
    }
}

export { Vanilla }