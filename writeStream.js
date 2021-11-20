const fs = require('fs')
const path = require('path')

module.exports = function ReadStream(output) {
    let Wstream 
    if(output !== undefined) {
        try {
            fs.accessSync(path.resolve(output), fs.constants.W_OK)
            Wstream = fs.createWriteStream(path.resolve(output), {
                        flags: 'a'
                    })
           }
           catch {
            process.stderr.write("File not found");
            process.exit(1);
           }
    }
    else {
        Wstream = process.stdout
    }
    return Wstream
}