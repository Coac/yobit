const Yobit = require('./index.js')

// Test public data APIs
var publicClient = new Yobit()

// Get BTCUSD ticker
publicClient.getTicker('btc_usd', cbLogData)

// Get BTCUSD Order Book
publicClient.getOrderBook('btc_usd', 10, cbLogData)

// Get BTCUSD trades
publicClient.getTrades('btc_usd', 10, cbLogData)

// Test private API
const KEY = ''
const SECRET = ''
var privateClient = new Yobit(KEY, SECRET)

// Add trade
// privateClient.addTrade('btc_usd', 'buy', 1, 0.001, cbLogData)

function cbLogData (err, data) {
  if (err) throw err
  console.log(data)
  return true
}
