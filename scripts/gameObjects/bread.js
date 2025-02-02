import { BaseGameObject } from "./baseGameObject.js";


class Bread extends BaseGameObject {
    name = "Bread"
    xVelocity = 0;
    yVelocity = -200;

    animationData = {
        "animationSprites": [],
        "timePerSprite": 0.3,
        "currentSpriteElapsedTime": 0,
        "firstSpriteIndex": 0,
        "lastSpriteIndex": 1,
        "currentSpriteIndex": 0
    };

    update = function () {
     
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet("../images/spritesheet1.png", 5, 1);
        this.switchCurrentSprites(0, 4);
    }
}

export { Bread }