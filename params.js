const transformCaesar = require('./transformCaesar')
const transformRot = require('./transformROT')
const transformAtabash = require('./transformAtabash')
const validState = require('./validation')
const  configFunction  = require("./config")

const { config } = configFunction(process.argv)
const state = validState(config)


let transformParams

if(!state) {
    process.stdout.write('Config params are wrong')
    process.exit(0);
}
else {
    let configArr;
    if (config[config.length - 1] === "-") {
        configArr = config.slice(0, -1).split("-");
    }
    else {
        configArr = config.split("-");
    }
    transformParams = configArr.map(type => {
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