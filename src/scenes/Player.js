import PackageClass from "./Package";
class PlayerClass extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, spriteKey) {
        super(scene, x, y, spriteKey);
        this.vecolidade = 200;
        this.scene = scene;
        this.scene.physics.world.enable(this);
        // this.setCollideWorldBounds(true);
        this.setDepth(1);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }

    createAnimations() {
        this.scene.anims.create({
            key: 'turn',
            frames: [{ key: this.texture.key, frame: 4 }],
            frameRate: 20,
        });

        this.scene.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers(this.texture.key, { frames: [0, 1, 2, 3] }),
            frameRate: 10,
            repeat: -1,
        });

        this.scene.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers(this.texture.key, { frames: [5, 6, 7, 8] }),
            frameRate: 10,
            repeat: -1,
        });
    }

    move(cursors) {
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

    fire(cursors, scene) {
        if (cursors.space.isDown && !this.spaceKeyPressed && scene.packageCounter.packageCount > 0) {
            this.spaceKeyPressed = true;
            // let pack = scene.packages.get(scene.player.x, scene.player.y);
            let pack = new PackageClass(scene, scene.player.x - 10, scene.player.y);
            if (pack) {
                // pack.setActive(true);
                // pack.setVisible(true);
                // pack.body.enable = true;

                // Set the velocity of the pack based on the player's direction
                const velocity = 500;
                if (cursors.left.isDown) {
                    if (cursors.up.isDown) {
                        pack.setVelocity(-velocity, -velocity);
                    } else if (cursors.down.isDown) {
                        pack.setVelocity(-velocity, velocity);
                    } else {
                        pack.setVelocity(-velocity * 0.5, 10);
                    }
                } else if (cursors.right.isDown) {
                    if (cursors.up.isDown) {
                        pack.setVelocity(velocity, -velocity);
                    } else if (cursors.down.isDown) {
                        pack.setVelocity(velocity, velocity);
                    } else {
                        pack.setVelocity(velocity * 0.5, 10);
                    }
                } else if (cursors.up.isDown) {
                    pack.setVelocity(0, -velocity * 0.5, 10);
                } else if (cursors.down.isDown) {
                    pack.setVelocity(0, velocity * 0.5, 10);
                }
                pack.setAngularVelocity(500);
                pack.setAngle(100)
                pack.setOffset(-pack.width/2, -pack.height/2);
                // pack.setAngularAcceleration(100);
                // Set the circle collision bounds for the pack
                // pack.setCircle(10, 5, 5);
                scene.packageCounter.decrement();
                // Destroy the pack after 2 seconds
                // scene.time.delayedCall(500, () => {
                //     pack.destroy();
                // });
            }
        } else if (cursors.space.isUp && this.spaceKeyPressed) {
            this.spaceKeyPressed = false;
        }

    }
}

export default PlayerClass;