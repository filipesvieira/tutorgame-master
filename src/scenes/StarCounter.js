class StarCounter extends Phaser.GameObjects.Text {
  constructor(scene, x, y, style) {
    super(scene, x, y, 'Stars: 0', style);

    // Add this text to the scene
    this.scene.add.existing(this);
    this.scrollFactorX = 0;
    this.scrollFactorY = 0;
    this.setDepth(1);
    // Initialize the star count to zero
    this.starCount = 0;
  }

  // Method to increment the star count and update the text
  increment() {
    this.starCount += 1;
    this.setText(`Stars: ${this.starCount}`);
  }
}

export default StarCounter;