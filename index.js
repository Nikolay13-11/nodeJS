const { pipeline } = require('stream')
const readStream = require('./readStream')
const writeStream = require('./writeStream')
const transformParams = require('./params')
const  configFunction  = require("./config")

const {input, output } = configFunction(process.argv)

pipeline(
    readStream(input),
    ...transformParams,
    writeStream(output),
    (err) => {
        (err) ? console.error('problem with pipeline...', err) : console.log('pipeline succeded') 
    }
)


 