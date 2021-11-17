const { funcWithArgs } = require("./config");
const validFunction = require('./helpers')

let obj = {}
// let test = conf(process.argv)
const { config }  = funcWithArgs


function isValidConf(config) {
    let configArr;
    if (config[config.length - 1] === "-") {
      const configArr = config.slice(0, -1).split("-");
      return configArr.every((elem) => validFunction(elem));
    }
    configArr = config.split("-");
    obj.configArray = configArr
    return configArr.every((elem) => validFunction(elem));
  }
  


//  isValidConf(configuration.config)

 obj.validState = isValidConf(config)

module.exports = obj

