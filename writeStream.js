const fs = require('fs')
const path = require('path')
const { output } = require("./config");

const exsistFile = fs.existsSync(path.resolve(output))

let Wstream 

if(output) {
    if(exsistFile) {
        Wstream = fs.createWriteStream(path.resolve(output))
    }
    else {
        process.stderr.write("File not found");
        process.exit();
    }
}
else {
    Wstream = process.stdout
}

module.exports = Wstream
