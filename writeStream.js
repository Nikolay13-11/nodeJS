const fs = require('fs')
const path = require('path')

module.exports = function ReadStream(output) {
    let Wstream 
    if(output !== undefined) {
        const exsistFile = fs.existsSync(path.resolve(output))
        if(exsistFile) {
            Wstream = fs.createWriteStream(path.resolve(output), {
                flags: 'a'
            })
        }
        else {
            process.stderr.write("File not found");
            process.exit(1);
        }
    }
    else {
    
        Wstream = process.stdout
    }
    return Wstream
}