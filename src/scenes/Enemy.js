class Enemy extends Phaser.GameObjects.Image {
    constructor(scene, x, y, speed, detectionRange) {
        super(scene, x, y, 'enemy');
        scene.physics.world.enable(this);
        scene.add.existing(this);

        this.speed = speed;
        this.detectionRange = detectionRange;
        this.target = null;
    }

    createAnimationsEnemy() {
        this.scene.anims.create({
            key: 'turn',
            frames: [{ key: 'enemy', frame: 4 }],
            frameRate: 20,
        });

        this.scene.anims.create({
            key: 'left',
            frames: [{ key: 'enemy',  frames: [0, 1, 2, 3] }],
            frameRate: 10,
            repeat: -1,
        });

        this.scene.anims.create({
            key: 'right',
            frames: [{ key: 'enemy',  frames: [5, 6, 7, 8] }],
            frameRate: 10,
            repeat: -1,
        });
    }

    update() {
        if (this.target) {
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance <= this.detectionRange) {
                const angle = Math.atan2(dy, dx);
                this.body.setVelocityX(this.speed * Math.cos(angle));
                this.body.setVelocityY(this.speed * Math.sin(angle));
            } else {
                this.body.setVelocity(0, 0);
            }
        }
    }
}

export default Enemy;