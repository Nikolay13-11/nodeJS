const transformCaesar = require('./transformCaesar')
const transformRot = require('./transformROT')
const transformAtabash = require('./transformAtabash')
const { configArray, validState } = require('./validation')

let transformParams

if(!validState) {
    process.stdout.write('Config params are wrong')
    process.exit(0);
}
else {
    transformParams = configArray.map(type => {
        if (type === 'C1' || type === 'C0') {
            return new transformCaesar(type)
        }
        else if (type === 'R1' || type === 'R0') {
            return new transformRot(type)
        }
        else if (type === 'A') {
            return new transformAtabash()
        }
    })
}

module.exports = transformParams