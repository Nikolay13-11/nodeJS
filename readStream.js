const fs = require('fs')
const path = require('path')

module.exports = function ReadStream(input) {
    let Rstream
    if(input) {
        const exsistFile = fs.existsSync(path.resolve(input))
       if(exsistFile) {
            Rstream = fs.createReadStream(path.resolve(input), 'utf-8')
       }
       else {
        process.stderr.write("File not found");
        process.exit(1);
       }
    }
    else {
        Rstream = process.stdin
    }
    return Rstream
}
