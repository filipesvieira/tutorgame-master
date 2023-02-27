class HealthBar {
    constructor(scene, x, y, width, height, value) {
        this.bar = new Phaser.GameObjects.Graphics(scene);
        this.bar.setScrollFactor(0);

        this.x = x;
        this.y = y;
        this.width = width;
        this.originalWidth = width; // nova propriedade originalWidth para armazenar tamanho original
        this.width = width;
        this.height = height;
        this.value = value;

        this.draw();


        this.height = height;
        this.value = value;

        this.draw(scene.player.vida);

        scene.add.existing(this.bar);
    }

    decrease(amount, scene) {
        this.value -= amount;

        if (this.value < 0) {
            this.value = 0;
        }

        this.draw(scene.player.vida);

        return (this.value === 0);
    }

    draw(vida) {
        this.bar.clear();

        //  Bar background
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, this.originalWidth, this.height);


        // Health bar
        const healthBarWidth = (this.value / vida) * this.originalWidth; // calcular a largura da barra de saúde usando o tamanho original da barra de fundo
        this.bar.fillStyle(0xffffff);
        this.bar.fillRect(this.x, this.y, healthBarWidth, this.height);
    }
}

export default HealthBar;