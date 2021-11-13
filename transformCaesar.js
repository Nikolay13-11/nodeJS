const {Transform} = require('stream');
const caesar = require('./caesar')


const r = process.stdin
const w = process.stdout

class TransformC extends Transform {
    constructor() {
        super()
    }
    _transform(chunk, enc, cb) {
        let res = '';
        chunk.toString().split('').forEach(symbal => {
            res += caesar(symbal, 'C1')
        });

        this.push(res)

        cb()
    }
}


module.exports = new TransformC()




// const transform = new Transform({
//     transform(chunk, enc, cb) {
//         let res = '';
//         chunk.toString().split('').forEach(symbal => {
//             res += caesar(symbal, 'C1')
//         });

//         this.push(res)

//         cb()
//     }
// })


// pipeline(
//     r,
//     transform,
//     w,
//     err => {
//         console.log(`Error: ${err}`)
//     }
// )

