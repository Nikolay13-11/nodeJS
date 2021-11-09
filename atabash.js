function atbash(input) {
    const regExp = /[A-Za-z]/g;
    let bigStart = 65;
    let bigEnd = 90;
    let smallStart = 97;
    let smallEnd = 122;
    let result;
    if (!regExp.test(input)) {
        result = input;
      }
      else {
        let charcode = input.charCodeAt();
        result = (charcode >= bigStart && charcode <= bigEnd) ?
        String.fromCharCode(bigEnd - (charcode - bigStart)) :
        String.fromCharCode(smallEnd - (charcode - smallStart))
      }
      return result
  };
  