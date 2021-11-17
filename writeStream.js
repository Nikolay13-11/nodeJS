const fs = require('fs')
const path = require('path')
const { funcWithArgs } = require("./config")
const { output } = funcWithArgs

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
        process.exit(0);
    }
}
else {

    Wstream = process.stdout
}

module.exports = Wstream
