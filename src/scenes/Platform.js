import StarClass from "./Star";
import PackageClass from "./Package";

class PlatformClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, 'platform');
        this.scene = scene;
        this.name = key;
        // Add the platform to the physics system
        this.scene.physics.world.enable(this);
        this.setImmovable(true);
        this.setOrigin(0, 0);

        // Set platform properties
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.body.moves = false;

        // Add the platform to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.player, this.onCollision, null, this);
    }

    onCollision(platform, player) {
        if (platform.name == "shop") {
            // Generate a random x and y position for the star
            const x = Phaser.Math.Between(100, 300);
            const y = Phaser.Math.Between(100, 300);

            // Create the star at the random position
            new PackageClass(platform.scene, x, y);
        }
        // this.scene.player.body.velocity.y = -400;
        // this.scene.player.setVelocidade(500);
        // platform.destroy();
    }

}

export default PlatformClass;