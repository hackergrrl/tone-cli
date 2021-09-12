const baudio = require('baudio')
const argv = require('minimist')(process.argv.slice(2),
  { alias: { v: 'volume', f: 'freq', d: 'duration' } })

const volume = argv.volume ? parseFloat(argv.volume) : 0.05
const freq = argv.freq ? parseInt(argv.freq) : 262
const duration = argv.duration ? parseInt(argv.duration) : Infinity

const b = baudio(t => {
  if (t >= duration) return 0
  return Math.sin(t * freq * Math.PI * 2) * volume
})
b.play()

if (isFinite(duration)) {
  setTimeout(() => {
    console.log('done')
    process.exit(0)
  }, duration * 1000)
}
