module.exports = function сaesar(chank, type) {
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
    } else {
      if (type === "C1") {
        if (charcode === bigEnd) {
            result += String.fromCharCode(bigStart);
        } else if (charcode === smallEnd) {
            result += String.fromCharCode(smallStart);
        } else {
            result += String.fromCharCode(charcode + 1);
        }
      }
      if (type === "C0") {
        if (charcode === bigStart) {
            result += String.fromCharCode(bigEnd);
        } else if (charcode === smallStart) {
            result += String.fromCharCode(smallEnd);
        } else {
            result += String.fromCharCode(charcode - 1);
        }
      }
    }
  })
  return result;
}

// module.exports = function сaesar(chank, type) {
//   const regExp = /[A-Za-z]/g;
//   let bigStart = 65;
//   let bigEnd = 90;
//   let smallStart = 97;
//   let smallEnd = 122;
//   return chank.map(input => {
//     if (!regExp.test(input)) {
//       return input;
//     } else {
//       let charcode = input.charCodeAt();
//       if (type === "C1") {
//         if (charcode === bigEnd) {
//             return String.fromCharCode(bigStart);
//         } else if (charcode === smallEnd) {
//             return String.fromCharCode(smallStart);
//         } else {
//             return String.fromCharCode(charcode + 1);
//         }
//       }
//       if (type === "C0") {
//         if (charcode === bigStart) {
//             return String.fromCharCode(bigEnd);
//         } else if (charcode === smallStart) {
//             return String.fromCharCode(smallEnd);
//         } else {
//             return String.fromCharCode(charcode - 1);
//         }
//       }
//     }
//   })
// }

