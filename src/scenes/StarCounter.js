class StarCounter extends Phaser.GameObjects.Text {
    constructor(scene, x, y, style) {
        super(scene, x, y, 'Stars: 0', style);

        // Add this text to the scene
        this.scene.add.existing(this);
        this.scrollFactorX = 0;
        this.scrollFactorY = 0;
        this.setDepth(1);
        // Initialize the star count to zero
        this.starCount = 100;
        this.setText(`Pacote:${this.starCount}`);

    }

    // Method to increment the star count and update the text
    increment() {
        this.starCount += 1;
        this.setText(`Pacotes:${this.starCount}`);
    }

    decrement() {
        if (this.starCount > 0) {
            this.starCount -= 1;
            this.setText(`Pacotes:${this.starCount}`);     
        }
    }

}

export default StarCounter;