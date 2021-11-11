const Transform = require('stream');

// let test = 'first data to tranform'

class Transformation extends Transform {
    constructor() {
        super();
    }

    _transform(chunk, encoding, callback) {
        try {
            this.push(chunk.toString().toUpperCase())
            callback()
        } catch(err) {
            callback(err)
        }
    }

    _flash(callback) {
        
        callback()
    }
}