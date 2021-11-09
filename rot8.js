function rot(input, type) {
    const regExp = /[A-Za-z]/g;
    let bigStart = 65;
    let bigEnd = 90;
    let smallStart = 97;
    let smallEnd = 122;
    let result;
    if (!regExp.test(input)) {
        result = input;
    } else {
        let charcode = input.charCodeAt();
        let numberAfterStepsEncode = charcode + 8
        let numberAfterStepsDecode = charcode - 8
        if (type === "R1") {
            if(charcode > bigStart && charcode <= bigEnd ) {
                result = (numberAfterStepsEncode > bigEnd) ? String.fromCharCode(bigStart + (numberAfterStepsEncode - bigEnd - 1)) : String.fromCharCode(numberAfterStepsEncode)
            }
            else {
                result = (numberAfterStepsEncode > smallEnd) ? String.fromCharCode(smallStart + (numberAfterStepsEncode - smallEnd - 1)) : String.fromCharCode(numberAfterStepsEncode) 
            }
        }
        if (type === "R0") {
            if(charcode > bigStart && charcode <= bigEnd ) {
                result = (numberAfterStepsDecode < bigStart) ? String.fromCharCode(bigEnd - ( bigStart - numberAfterStepsDecode - 1)) : String.fromCharCode(numberAfterStepsDecode)
            }
            else {
                result = (numberAfterStepsDecode < smallStart) ? String.fromCharCode(smallEnd - (smallStart - numberAfterStepsDecode - 1)) : String.fromCharCode(numberAfterStepsDecode) 
            }
        }
        
    }
    return result;
  }


