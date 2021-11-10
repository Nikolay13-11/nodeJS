const fs = require('fs')
const path = require('path')
const { input } = require("./config");



const exsistFile = fs.existsSync(path.resolve(input))
let Rstream

if(input) {
   if(exsistFile) {
        Rstream = fs.createReadStream(path.resolve(input), 'utf-8')
   }
   else {
    process.stderr.write("Error");
    process.exit();
   }
}
else {
    dataFromReadStream = process.stdin
}

module.exports = Rstream


