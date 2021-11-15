module.exports = function rot(chank, type) {
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
            if (type === "R1") {
                let numberAfterStepsEncode = charcode + 8
                if(charcode > bigStart && charcode <= bigEnd ) {
                    result += (numberAfterStepsEncode > bigEnd) ? String.fromCharCode(bigStart + (numberAfterStepsEncode - bigEnd - 1)) : String.fromCharCode(numberAfterStepsEncode)
                }
                else {
                    result += (numberAfterStepsEncode > smallEnd) ? String.fromCharCode(smallStart + (numberAfterStepsEncode - smallEnd - 1)) : String.fromCharCode(numberAfterStepsEncode) 
                }
            }
            if (type === "R0") {
                let numberAfterStepsDecode = charcode - 8
                if(charcode > bigStart && charcode <= bigEnd ) {
                    result += (numberAfterStepsDecode < bigStart) ? String.fromCharCode(bigEnd - ( bigStart - numberAfterStepsDecode - 1)) : String.fromCharCode(numberAfterStepsDecode)
                }
                else {
                    result += (numberAfterStepsDecode < smallStart) ? String.fromCharCode(smallEnd - (smallStart - numberAfterStepsDecode - 1)) : String.fromCharCode(numberAfterStepsDecode) 
                }
            }
            
        }
    
    })
    return result;
  }


