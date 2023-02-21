class PackageClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'pack');
        this.scene = scene;

        // Add the pack to the physics system
        this.scene.physics.world.enable(this);
        this.setImmovable(true);
        this.setOrigin(0, 0);
        this.setScale(0.05);
        // this.setSize(20, 20);

        // Set pack properties
        this.body.allowGravity = false;
        this.body.immovable = true;
        this.body.moves = true;
        this.on('changedata-rotation', function(){
            this.body.rotation = Phaser.Math.DegToRad(this.angle);
          }, this);
        // Add the pack to the scene
        this.scene.add.existing(this);
        this.scene.physics.add.collider(this, this.scene.player, this.onCollisionPlayer, null, this);
        this.scene.physics.add.collider(this, this.scene.platforms, this.onCollisionPlatforms, null, this);
    }

    onCollisionPlayer(pack, player) {
        player.scene.packageCounter.increment();
        pack.destroy();
    }
    onCollisionPlatforms(pack, platform) {
        console.log("🚀 ~ file: Star.js:28 ~ PackageClass ~ onCollisionPlatforms ~ platform", platform)
        pack.destroy();
    }

}

export default PackageClass;