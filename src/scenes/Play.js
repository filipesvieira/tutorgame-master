import Phaser from "phaser";
import { SkyImg, PlayerImg, PlatformImg } from "../assets/";
import PlayerClass from "./Player";
import PlatformClass from "./Platform";

class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayScene' });
    }

    preload() {
        this.load.image('sky', SkyImg);
        this.load.image('platform', PlatformImg);
        this.load.spritesheet('player', PlayerImg, {
            frameWidth: 32,
            frameHeight: 48,
            // startFrame: 4,
            // endFrame: 3
        });


    }

    create() {
        this.add.image(game.config.width / 2, game.config.height / 2, "sky");

        this.player = new PlayerClass(this, 500, 100, 'player');
        this.player.createAnimations();

        this.cursors = this.input.keyboard.createCursorKeys();

        this.platforms = [
            new PlatformClass(this, 100, 300),
            new PlatformClass(this, 300, 400),
            new PlatformClass(this, 500, 500)
        ];

        // Add each platform to the scene
        this.platforms.forEach(platform => {
            this.add.existing(platform);
        });

        this.physics.add.collider(this.player, this.platforms);
    }
    update() {
        this.player.move(this.cursors);
    }
}

export default PlayScene;