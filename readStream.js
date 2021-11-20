const fs = require('fs')
const path = require('path')

module.exports = function ReadStream(input) {
    let Rstream
    if(input) {
        try {
        fs.accessSync(path.resolve(input), fs.constants.R_OK)
        Rstream = fs.createReadStream(path.resolve(input), 'utf-8')
       }
       catch {
        process.stderr.write("File not found");
        process.exit(1);
       }
    }
    else {
        Rstream = process.stdin
    }
    return Rstream
}
