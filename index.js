const { pipeline } = require('stream')
const readStream = require('./readStream')
const writeStream = require('./writeStream')
const transformCaesar = require('./transformCaesar')
const transformRot = require('./transformROT')
const transformAtabash = require('./transformAtabash')
const arrayConfig = require('./config')

const w = process.stdout
const r = process.stdin

let transformParams = arrayConfig.arrConf.map(type => {
    if (type === 'C1' || type === 'C0') {
        return new transformCaesar(type)
    }
    else if (type === 'R1' || type === 'R0') {
        return new transformRot(type)
    }
    else if (type === 'A') {
        return new transformAtabash()
    }
})

// const a = new transformRot('R1')


pipeline(
    readStream,
    ...transformParams,
    writeStream,
    (err) => {
        (err) ? console.error('problem with pipeline...', err) : console.log('pipeline succeded') 
    }
)


 