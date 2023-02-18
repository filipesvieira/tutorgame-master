import StarCounter from "./StarCounter";

class StarClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'star');
        this.scene = scene;

        // Add the star to the physics system
        this.scene.physics.world.enable(this);
        this.setImmovable(true);
        this.setOrigin(0, 0);

        // Set star properties
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.body.moves = false;

        // Add the star to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.player, this.onCollision, null, this);

        // Initialize the star counter to zero
        // Display the star count on the screen
    }

    onCollision(star, player) {
        // this.scene.player.body.velocity.y = -400;
        // this.scene.player.setVelocidade(500);
        star.destroy();
        StarCounter.increment();

        // Increment the star counter and update the text display
        // this.starCount += 1;
        // this.starCountText.setText(`Stars: ${this.starCount}`);
    }

}

export default StarClass;