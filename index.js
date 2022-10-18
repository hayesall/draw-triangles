var fs = require('fs')
var trianglify = require('trianglify')

const canvas = trianglify({
    width: 1920,
    height: 1080,
    cellSize: Math.random() * 200 + 40,
    xColors: 'random',
    variance: Math.random(),
}).toCanvas()

const file = fs.createWriteStream('trianglify.png')
canvas.createPNGStream().pipe(file)
