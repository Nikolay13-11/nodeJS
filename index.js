const { pipeline } = require('stream')
const readStream = require('./readStream')
const writeStream = require('./writeStream')


pipeline(
    readStream,
    writeStream,
    (err) => {
        (err) ? console.error('problem with pipeline...', err) : console.log('pipeline succeded') 
    }
)
 



