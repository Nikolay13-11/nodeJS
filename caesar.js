function сaesar(input, type) {
    const regExp = /[A-Za-z]/g;
    let charcode = input.charCodeAt();
    let bigStart = 65;
    let bigEnd = 90;
    let smallStart = 97;
    let smallEnd = 122;
    let result;
    if (!regExp.test(input)) {
      result = input;
    } else {
      if (type === "C1") {
        if (charcode === bigEnd) {
            result = String.fromCharCode(bigStart);
        } else if (charcode === smallEnd) {
            result = String.fromCharCode(smallStart);
        } else {
            result = String.fromCharCode(charcode + 1);
        }
      }
      if (type === "C0") {
        if (charcode === bigStart) {
            result = String.fromCharCode(bigEnd);
        } else if (charcode === smallStart) {
            result = String.fromCharCode(smallEnd);
        } else {
            result = String.fromCharCode(charcode - 1);
        }
      }
    }
    return result;
  }
  