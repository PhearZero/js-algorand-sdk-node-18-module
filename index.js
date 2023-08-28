import algosdk, {Indexer} from 'algosdk'

const indexer = new Indexer(
    "",
    "https://mainnet-idx.algonode.cloud/",
    443
)

const res = await indexer.lookupAssetByID(312769).do()
console.log(algosdk.Indexer === Indexer)
console.log(res)
