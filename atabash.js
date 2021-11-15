module.exports = function atbash(chank) {
    let bigStart = 65;
    let bigEnd = 90;
    let smallStart = 97;
    let smallEnd = 122;
    let result = '';
    chank.forEach(input => {
      let charcode = input.charCodeAt();
      if (charcode < bigStart || charcode > smallEnd) {
        result += input;
      } else if (charcode > bigEnd && charcode < smallStart){
        result += input;
      }
        else {
          result += (charcode >= bigStart && charcode <= bigEnd) ?
          String.fromCharCode(bigEnd - (charcode - bigStart)) :
          String.fromCharCode(smallEnd - (charcode - smallStart))
        }
    })
      return result
  };
  