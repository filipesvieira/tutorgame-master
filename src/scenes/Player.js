
class PlayerClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spriteKey) {
        super(scene, x, y, spriteKey);
        this.vecolidade = 200;
        this.scene = scene;
        this.scene.physics.world.enable(this);
        this.setCollideWorldBounds(true);
        this.setDepth(1);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }

    createAnimations() {
        this.scene.anims.create({
            key: 'turn',
            frames: [ { key: this.texture.key, frame: 4 } ],
            frameRate: 20,
        });

        this.scene.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.texture.key, { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 10,
            repeat: -1,
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.texture.key, { frames: [ 5, 6, 7, 8 ] }),
            frameRate: 10,
            repeat: -1,
        });
    }

    move(cursors) {
        console.log("move");
        if (cursors.left.isDown) {
            this.setVelocityX(-this.vecolidade);
            this.anims.play('left', true);
        } else if (cursors.right.isDown) {
            this.setVelocityX(this.vecolidade);
            this.anims.play('right', true);
        } else if (cursors.up.isDown) {
            this.setVelocityY(-this.vecolidade);
            this.anims.play('right', true);
        } else if (cursors.down.isDown) {
            this.setVelocityY(this.vecolidade);
            this.anims.play('left', true);
        } else {
            this.setVelocityY(0);
            this.setVelocityX(0);
            this.anims.play('turn', true);
        }
    }

    setVelocidade(velocidade) {
        this.vecolidade = this.vecolidade + velocidade;
    }
}

export default PlayerClass;