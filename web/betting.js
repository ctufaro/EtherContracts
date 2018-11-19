var Betting = function(){
    var web;
    var myAddress;
    var contractAddress = '0x345ca3e014aaf5dca488057592ee47305d9b3e10';
    var bettingContract;   

    var Init = function(){
        if ( typeof web3 != 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
        }
        console.log("using web3 version:) " + web3.version);
        bettingContract = new web3.eth.Contract(abi, contractAddress);       
        console.log(bettingContract);

        GetUserAsync().then(res => {
            console.log("Your Wallet address is: " + res[0]);
        })
    }();

    async function GetUserAsync(){
        return await web3.eth.getAccounts( (error,acc) => { return acc; });
    };
   

}();