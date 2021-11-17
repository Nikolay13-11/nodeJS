const {Transform, pipeline} = require('stream');
const rot = require('./rot8');

class TransformR extends Transform {
    constructor(type) {
        super()
        this.type = type
    }
    _transform(chunk, enc, cb) {
        let result = rot(chunk.toString(), this.type)
        this.push(result)

        cb()
    }
}

module.exports = TransformR

