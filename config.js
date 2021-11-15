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


module.exports = args;


  