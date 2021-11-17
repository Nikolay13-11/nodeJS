const {Transform} = require('stream');
const atabash = require('./atabash')

class TransformA extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, enc, cb) {
        let result = atabash(chunk.toString());
        this.push(result)

        cb()
    }
}

module.exports = TransformA
