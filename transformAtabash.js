const {Transform} = require('stream');
const atabash = require('./atabash')


const r = process.stdin
const w = process.stdout

class TransformA extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, enc, cb) {
        let result = atabash(chunk.toString().split(''));
        this.push(result)

        cb()
    }
}


module.exports = TransformA
