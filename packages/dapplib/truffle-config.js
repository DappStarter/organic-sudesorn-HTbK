require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note soccer prosper grace opinion symptom syrup'; 
let testAccounts = [
"0x687b7c6290295941379d299f579ed82ca47b43e54a383e6c07218c0d8e276ee3",
"0xfd315f58b17b7567c8acc98c0f89b7681e010e526048e3359031a0e9f1fbe2d2",
"0x076425aaf023a893c7a7d6ec11ebcf4ef48db9f6f2197e24a97b99933d542632",
"0x299641ffbf70497003022ee083161e9f0c40a80924f1f413ae0b9f22e8936582",
"0x71345f8265e5b45b7c0922eb3ff900d5c0fc1b53101b74a04a35c5b26bcaf9bf",
"0x9d01ad601e6c51d61b4d5285e537aa624815aa4954d033f4071226dd3cdf21c4",
"0xcf665e023e08941700ba88839a5276f678f98b6cd996ead6bc7380d656b1a7a2",
"0xa82d0f83ff1f633de6debbd11a9ff956b68ae42dd997d53dbb22db5c793c1500",
"0x6bda410673fc55264eb5c9be3393c024a6a2474371e92b203eda192ea9bdcda3",
"0x3f33413391da1310b97db4098f1cd72f079e08cd2946b3940bfaaab61475c1fe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

