const Cabal = require('cabal-core')

let key = '6c3cc8b90a7fc9558de91fe47cbd23ed72917ade21da07d3ea4e689972bfc6a0'
let cabal = Cabal('.state', key)

cabal.swarm((err) => {
  if (err) {
    console.error('swarm not ok', err)
    process.exit(1)
  } else {
    console.log('swarm ok')
  }
})

cabal.getLocalKey((err, localkey) => {
  if (err) {
    error(err)
  } else {
    console.log('local key>', localkey)
  }
})

process.on('SIGINT', () => process.exit(0))
