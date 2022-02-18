require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth misery minor inner cloth flush twenty'; 
let testAccounts = [
"0x3e3201c3d6b475d54f54dee1dc67fff662000c880284a21db691a7afafa7b743",
"0xcee31b50cd093ec850bfc1a0a7b42989c668e57c2cce3cf349d7e27dd61ec685",
"0x211c1fbab1180aa3421d806de4697ebeb48c981428f82e53cbcb0c79385a83a2",
"0xf34a57c6efde6fb41c840e125f29620859e3fbaeee803521a91d2891554d3de5",
"0x97e8d209214d393dd27b085d8ecce57065e44034dfae3f5a19e9cfcb0422fd3f",
"0xf816f8314ac96e4cf8f6f5819c2c71a71d48706f5a9d49d8794f1d8131d95594",
"0x6a22c73482f240d6990bc5a6c94c0c975a118645d0732568653a0916e4e4ef8f",
"0x49ba87692d0edd386b8f23bdbd1af3f079a56494c150c973bbe7de68f75961d1",
"0x238e0eca383cfd1f4c491bc765c253ed5c246c34baeccd1aaac149cec36cf219",
"0xe635c194e136f2921544b0a8969387123e0a851d251a570f13ba468e6fbaa8ac"
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

