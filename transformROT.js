const {Transform} = require('stream');
const rot = require('./rot8')


const r = process.stdin
const w = process.stdout

class TransformR extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, enc, cb) {
        let res = '';
        chunk.toString().split('').forEach(symbal => {
            res += rot(symbal, 'R1')
        });

        this.push(res)

        cb()
    }
}


module.exports = new TransformR()
