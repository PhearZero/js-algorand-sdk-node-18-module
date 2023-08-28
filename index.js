const algosdk= require('algosdk');
const {Indexer} = algosdk;
const indexer = new Indexer(
    "",
    "https://mainnet-idx.algonode.cloud/",
    443
)

indexer.lookupAssetByID(312769).do().then(res=>{
    console.log(algosdk.Indexer === Indexer)
    console.log(res)

})
