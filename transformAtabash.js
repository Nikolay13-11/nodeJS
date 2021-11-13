const {Transform} = require('stream');
const atabash = require('./atabash')


const r = process.stdin
const w = process.stdout

class TransformA extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, enc, cb) {
        let res = '';
        chunk.toString().split('').forEach(symbal => {
            res += atabash(symbal)
        });

        this.push(res)

        cb()
    }
}


module.exports = new TransformA()
