import { global } from "../modules/global.js";
import { BaseGameObject } from "./baseGameObject.js";
class Sugar extends BaseGameObject {
    name = "Sugar";
    yVelocity = 50;
    countDisplay = document.querySelector("#sugarCount");

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
    reactToCollision = function(collidingObject){
        switch(collidingObject.name){
            case "Bowl":
                this.active = false;
                global.recipe.sugar -= 1;
                this.countDisplay.innerHTML = global.recipe.sugar;
                break;
        }
    }

    constructor(x, y, width, height){
        super(x, y, width, height);
        this.loadImages(["../images/Sugar.png"]);
        let random = Math.random()*global.canvas.width - this.width;
        this.x = random;
    }
}

export { Sugar }