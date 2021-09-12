const baudio = require('baudio')
const argv = require('minimist')(process.argv.slice(2),
  { alias: { v: 'volume', f: 'freq' } })

const volume = argv.volume ? parseFloat(argv.volume) : 0.05
const freq = argv.freq ? parseInt(argv.freq) : 262

const b = baudio(t => {
  return Math.sin(t * freq * Math.PI * 2) * volume
})
b.play()

