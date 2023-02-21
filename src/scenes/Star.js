class StarClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'star');
        this.scene = scene;
        console.log("🚀 ~ file: Star.js:5 ~ StarClass ~ constructor ~ this.scene", this.scene)

        // Add the star to the physics system
        this.scene.physics.world.enable(this);
        this.setImmovable(true);
        this.setOrigin(0, 0);

        // Set star properties
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.body.moves = true;

        // Add the star to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.player, this.onCollisionPlayer, null, this);
        this.scene.physics.add.collider(this, this.scene.platforms, this.onCollisionPlatforms, null, this);
    }

    onCollisionPlayer(star, player) {
        player.scene.starCounter.increment();
        star.destroy();
    }
    onCollisionPlatforms(star, platform) {
        console.log("🚀 ~ file: Star.js:28 ~ StarClass ~ onCollisionPlatforms ~ platform", platform)
        star.destroy();
    }

}

export default StarClass;