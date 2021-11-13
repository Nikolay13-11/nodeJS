const args = process.argv.reduce((acc, item, index, arr) => {
    if (item === "-c" || item === "--config") {
      acc["config"] = arr[index + 1];
    } else if (item === "-i" || item === "--input") {
      acc["input"] = arr[index + 1];
    } else if (item === "-o" || item === "--output") {
      acc["output"] = arr[index + 1];
    }
    return acc;
  }, {});
  

  

  
  const validConf = "C1-R1-C0-C0-A-R0-R1-R1-A-C1";
  const notvalidConf = "C1-A-";
  
  function isValidConf(config) {
    let configArr;
    if (config[config.length - 1] === "-") {
      const configArr = config.slice(0, -1).split("-");
      return configArr.every((elem) => isValidElem(elem));
    }
    configArr = config.split("-");
    args.arrConf = configArr
    return configArr.every((elem) => isValidElem(elem));
  }
  
  function isValidElem(el) {
    return el.length === 1
      ? isValidAtbash(el)
      : el.length === 2
      ? isValidCaesar(el)
      : false;
  }
  
  function isValidAtbash(el) {
    return el === "A" ? true : false;
  }
  
  function isValidCaesar(el) {
    if (el[0] === "C" || el[0] === "R") {
      return Number(el[1]) <= 1 ? true : false;
    } else {
      return false;
    }
  }

 isValidConf(args.config)
  
  // console.log("validConf: ", isValidConf(validConf));
  // console.log("notvalidConf: ", isValidConf(notvalidConf));
  module.exports = args;

  