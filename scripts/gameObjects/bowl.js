import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Bowl extends BaseGameObject {
    name = "Bowl";
    xVelocity = 0;
    yVelocity = 0;
    useGravityForces = true;

    phyicsData = {
        "fallVelocity": 0,
        "terminalVElocity": 53,
        "jumpForce": 0,
        "jumpForceDecay": 30
    }

    update = function () {
        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;
    }

    
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["../images/Bowl.png"]);
    }
}

export { Bowl }