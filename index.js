const { pipeline } = require('stream')
const readStream = require('./readStream')
const writeStream = require('./writeStream')
const transformParams = require('./params')

pipeline(
    readStream,
    ...transformParams,
    writeStream,
    (err) => {
        (err) ? console.error('problem with pipeline...', err) : console.log('pipeline succeded') 
    }
)


 