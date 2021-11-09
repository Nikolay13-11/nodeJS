function сaesar(input, type) {
    const regExp = /[A-Za-z]/g;
    let charcode = input.charCodeAt();
    let bigStart = 65;
    let bigEnd = 90;
    let smallStart = 97;
    let smallEnd = 122;
    let res;
    if (!regExp.test(input)) {
      res = input;
    } else {
      if (type === "C1") {
        if (charcode === bigEnd) {
          res = String.fromCharCode(bigStart);
        } else if (charcode === smallEnd) {
          res = String.fromCharCode(smallStart);
        } else {
          res = String.fromCharCode(charcode + 1);
        }
      }
      if (type === "C0") {
        if (charcode === bigStart) {
          res = String.fromCharCode(bigEnd);
        } else if (charcode === smallStart) {
          res = String.fromCharCode(smallEnd);
        } else {
          res = String.fromCharCode(charcode - 1);
        }
      }
    }
    return res;
  }
  