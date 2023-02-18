import Phaser from "phaser";
import { SkyImg, PlayerImg } from "../assets/";
import { setScaleBackground } from "../functions/";
import Web3 from 'web3';

class HomeScene extends Phaser.Scene {
    constructor() {
        super('HomeScene');
        console.log('TESETETs')
    }

    preload() {
        this.load.image('sky', SkyImg);
        this.load.image('playerDog', PlayerImg);
    }

    async loadWeb3() {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
        }
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            var accounts = await web3.eth.getAccounts();
            this.addressValue = accounts[0];
            this.address.setText(accounts[0]);
            if (this.addressValue.length === 0) {
                this.scene.start('HomeScene');
            } else {
                this.scene.start('PlayScene');
            }
        }
        else {
            window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
        }
    }

    create() {
        this.sky = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'sky');
        this.address = this.add.text(30, 50, 'Wallet Address not connected', { font: '24px Courier', fill: '#00ff00' });
        this.addressValue = [];
        // setScaleBackground(this);

        this.buttonConnect = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'playerDog').setInteractive();

        this.buttonConnect.setScale(0.3);
        this.tweens.add({
            targets: this.buttonConnect,
            x: 250,
            duration: 3000,
            ease: 'Power2',
            yoyo: true,
            delay: 1000,
            loop: -1
        });
        this.buttonConnect.on('pointerdown', async () => {
            await this.buttonConnect.setTint('#316');
            await this.loadWeb3();
        })
    }

    update() {
        // if (this.addressValue.length === 0) {
        //     console.log('N CONECTADO ');
        //     // this.scene.start('HomeScene');
        // } else {
        //     this.scene.start('Play');
        // }
    }
}

export default HomeScene;