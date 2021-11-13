const { pipeline } = require('stream')
const readStream = require('./readStream')
const writeStream = require('./writeStream')
const transformCaesar = require('./transformCaesar')
const transformRot = require('./rot8')
const transformAtabash = require('./atabash')
const arrayConfig = require('./config')

// console.log(arrayConfig.arrConf)

let transformParams = arrayConfig.arrConf.map(type => {
    if (type === 'C1' || type === 'C0') {
        return transformCaesar
    }
    else if (type === 'R1' || type === 'R0') {
        return transformRot
    }
    else if (type === 'A') {
        return transformAtabash
    }
})

// console.log(transformParams);

let streams = [ readStream, transformCaesar, transformRot, transformAtabash, writeStream ]


pipeline(
    readStream, 
    ...streams,
    writeStream,
    (err) => {
        (err) ? console.error('problem with pipeline...', err) : console.log('pipeline succeded') 
    }
)
 



