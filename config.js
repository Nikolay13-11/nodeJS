const validFunction = require('./helpers')

function getArgsFromConsoleInput(inputArray) {
      const args = inputArray.reduce((acc, item, index, arr) => {
        let e = arr[index]
        if (item === "-c" || item === "--config") {
          if(!acc.hasOwnProperty('config')) {
            acc["config"] = arr[index + 1];
          }
          else {
            throw new Error(`You provided ${e} argument more than once`)
          }
        } else if (item === "-i" || item === "--input") {
          if(!acc.hasOwnProperty('input')) {
            acc["input"] = arr[index + 1];
          }
          else {
            throw new Error(`You provided ${e} argument more than once`)
          }
        } else if (item === "-o" || item === "--output") {
          if(!acc.hasOwnProperty('output')) {
            acc["output"] = arr[index + 1];
          }
          else {
            throw new Error(`You provided ${e} argument more than once`)
          }
        }
        return acc;
      }, {});
      if(args.hasOwnProperty('config')) {
        let stateValidConfig = args.config.split('-').every((elem) => validFunction(elem))
        if(stateValidConfig) {
          return args
        }
        else {
          throw new Error(`config wasn't pass`)
        }
      }
      else {
        throw new Error(`config wasn't pass`)
      }
    }


    module.exports = {
      clearFunc: getArgsFromConsoleInput,
      funcWithArgs: getArgsFromConsoleInput(process.argv),
    }

