import { global } from "./global.js";

function move(event) {
    switch (event.key) {
        case "d":
            global.playerObject.xVelocity = 100;
            global.playerObject.yVelocity = 0;
            break;
        case "a":
            global.playerObject.xVelocity = -100;
            global.playerObject.yVelocity = 0;
            break;
    }
}


document.addEventListener("keypress", move);