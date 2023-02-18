import { 
    PlayerImg,
    SkyImg,
    // LogoImg,
    // PipeImg,
    // CoinImg,
    // FoodSpriteSheet
} from "../assets/";

export function setScaleBackground(data) {
    let scaleX = data.cameras.main.width / data.sky.width;
    let scaleY = data.cameras.main.height / data.sky.height;
    let scale = Math.max(scaleX, scaleY);
    return data.sky.setScale(scale).setScrollFactor(0);
}
//Funções de pré load do game
export function bootLoader() {
    this.load.image('sky', SkyImg);
    // this.load.image('logo', LogoImg);
    this.load.image('player', PlayerImg);
    // this.load.image('pipe', PipeImg);
    // this.load.image('coin', CoinImg);
    // this.load.spritesheet('food', FoodSpriteSheet,  { frameWidth: 16, frameHeight: 16 });
    // this.load.audio('latido', "../../src/assets/dog.wav");
}

export function bootCreate() {
    this.scene.start('HomeScene');
}
//-------------------------------
// export function getBalanceMetamask(scene) {
//     var Web3 = require('web3');
//     var accounts = web3.eth.getAccounts();
//     accounts.then(async (data) => {
//         scene.addressValue = data[0];
//         let walletIni = data[0].slice(0, 5);
//         let walletEnd = data[0].slice(-5, data[0].length);
//         await scene.walletAddress.setText('Wallet Connected: ' + walletIni + '...' + walletEnd);
//         const web3_bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545/'); // AQUI PEGANDO REDE TESTNET
//         // const web3_bsc = new Web3('https://bsc-dataseed.binance.org/'); // AQUI PEGANDO REDE MAIN
// 		// console.log("TCL: getBalanceMetamask -> web3", web3)
//         web3_bsc.eth.getBalance(scene.addressValue).then(async (data) => {
//             let tokenBnb = web3_bsc.utils.fromWei(data, 'ether');
// 			// console.log("TCL: getBalanceMetamask -> tokenBnb", tokenBnb)
//             // scene.balanceBnb = await tokenBnb.slice(0, -15);
//             scene.balanceBnb = tokenBnb;
//             // // The minimum ABI required to get the ERC20 Token balance
//             const minABI = [
//                 {
//                     constant: true,
//                     inputs: [{ name: "_owner", type: "address" }],
//                     name: "balanceOf",
//                     outputs: [{ name: "balance", type: "uint256" }],
//                     type: "function",
//                 },
//             ];
//             // const tokenAddress = "0x5fb134d7d16fA4dCAB0a729DB41bc81D60927636"; // CUSTOM TOKEN BBC
//             const tokenAddress = "0x35806BB5B29B43925fb3C7b34080ac76d7016680"; // CUSTOM TOKEN BOB
//             const walletAddress = scene.addressValue;
//             const contract = new web3_bsc.eth.Contract(minABI, tokenAddress);
//             const result = contract.methods.balanceOf(walletAddress).call(); // 29803630997051883414242659
//             result.then((data) => {
//                 const format = web3_bsc.utils.fromWei(data, 'ether'); // 29803630.997051883414242659
// 				// console.log("TCL: getBalanceMetamask -> format", format)
//                 // scene.balanceCustomToken = format.slice(0, -15);
//                 scene.balanceCustomToken = format;
//             }).catch((err) => {
//                 console.log('002 ', err);
//             });
//         });
//     }).catch((err) => console.log('001 ', err));
// }