class PackageCounter extends Phaser.GameObjects.Text {
    constructor(scene, x, y, style) {
        super(scene, x, y, 'Pacote: 0', style);

        // Add this text to the scene
        this.scene.add.existing(this);
        this.scrollFactorX = 0;
        this.scrollFactorY = 0;
        this.setDepth(1);
        // Initialize the package count to zero
        this.packageCount = 100;
        this.setText(`Pacote:${this.packageCount}`);

    }

    // Method to increment the package count and update the text
    increment() {
        this.packageCount += 1;
        this.setText(`Pacotes:${this.packageCount}`);
    }

    decrement() {
        if (this.packageCount > 0) {
            this.packageCount -= 1;
            this.setText(`Pacotes:${this.packageCount}`);     
        }
    }

}

export default PackageCounter;