const validFunction = require('./helpers')

module.exports = function isValidConf(config) {
    if (config[config.length - 1] === "-") {
      const configArr = config.slice(0, -1).split("-");
      return configArr.every((elem) => validFunction(elem));
    }
    configArr = config.split("-");
    return configArr.every((elem) => validFunction(elem));
  }


