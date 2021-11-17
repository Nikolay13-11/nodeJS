const fs = require('fs')
const path = require('path')
const { funcWithArgs } = require("./config")
const { input } = funcWithArgs



let Rstream

if(input) {
    const exsistFile = fs.existsSync(path.resolve(input))
   if(exsistFile) {
        Rstream = fs.createReadStream(path.resolve(input), 'utf-8')
   }
   else {
    process.stderr.write("File not found");
    process.exit(0);
   }
}
else {
    Rstream = process.stdin
}

module.exports = Rstream


