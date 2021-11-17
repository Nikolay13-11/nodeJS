module.exports = function isValidElem(el) {
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