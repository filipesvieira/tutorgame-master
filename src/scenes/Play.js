import Phaser from "phaser";
import { SkyImg, PlayerImg, PlatformImg, StarImg, ShopImg, PackageImg } from "../assets/";
import PlayerClass from "./Player";
import PlatformClass from "./Platform";
// import StarCounter from "./StarCounter";
// import StarClass from "./Star";
import PackageCounter from "./PackageCounter";
import PackageClass from "./Package";

class PlayScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PlayScene' });
    }

    preload() {
        this.load.image('sky', SkyImg);
        // this.load.image('star', StarImg);
        this.load.image('pack', PackageImg);
        this.load.image('platform', PlatformImg);
        this.load.image('shop', ShopImg)
        this.load.spritesheet('player', PlayerImg, {
            frameWidth: 32,
            frameHeight: 48,
            // startFrame: 4,
            // endFrame: 3
        });


    }

    create() {
        this.add.image(game.config.width / 2, game.config.height / 2, "sky").setScale(3);
        this.physics.world.setBounds(0, 0, 1024, 720);
        this.player = new PlayerClass(this, 500, 100, 'player').setScale(2);
        this.packageCounter = new PackageCounter(this, 475, 290);

        this.player.createAnimations();
        this.cameras.main.startFollow(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.platforms = [
            new PlatformClass(this, 0, 300, 'shop').setDisplaySize(22, 2).setTexture('shop').setSize(600, 600).setScale(0.2),
            new PlatformClass(this, 300, 400),
            new PlatformClass(this, 500, 500)
        ];

        this.packs = this.physics.add.group({
            classType: PackageClass,
            maxSize: 1,
            runChildUpdate: false,
        });

        // this.physics.add.collider(this.packs, this.platforms, (pack, enemy) => {
        //     pack.disableBody(true, true);
        //     enemy.destroy();
        // });
        
        // Add each platform to the scene
        this.platforms.forEach(platform => {
            this.add.existing(platform);
        });

        this.physics.add.collider(this.player, this.platforms);
    }
    update() {
        this.player.move(this.cursors);
        this.player.fire(this.cursors, this);
    }
}

export default PlayScene;