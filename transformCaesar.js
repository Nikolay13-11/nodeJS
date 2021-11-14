const {Transform, pipeline} = require('stream');
const caesar = require('./caesar')

class TransformC extends Transform {
    constructor(type) {
        super()
        this.type = type
    }
    _transform(chunk, enc, cb) {
        let result = caesar(chunk.toString().split(''), this.type);
        this.push(result)

        cb()
    }
}

module.exports = TransformC

