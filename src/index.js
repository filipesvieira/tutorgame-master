import * as Phaser from "phaser";
import { PlayScene } from "./scenes";

const config = {
    name: "app",
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        // parent: 'phaser-example',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },
    // parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [PlayScene],
};

window.game = new Phaser.Game(config);
