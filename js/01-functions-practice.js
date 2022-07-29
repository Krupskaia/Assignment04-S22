//STEP 1
function halfNumber(number) {
    let result = number / 2
    let strResult = `Half of ${number} is ${result}.`
    return strResult    
}

//STEP 2
function squareNumber(number) {
    let result = Math.pow(number, 2)
    let strResult = `The result of squaring the number ${number} is ${result}.`
    return strResult    
}


//STEP 3
function percentOf(number1, number2) {
    let result = number2*(number1/100)
    let strResult = `${result} is ${number1} of ${number2}.`
    return strResult    
}

//STEP 4
function FindModulus(number1, number2) {
    let result = number1 % number2
    let strResult = `${result} is the modulus of ${number1} and ${number2}.`
    return strResult 
}

//STEP 5
function Sumnumbers(strNumbers) {
    let i = 0
    let l = strNumbers.lenght
    let total = 0
    while (i <= l) {
        let pos = strNumbers.indexOf(",", i)
        let num = parseInt(strNumbers.slice(i,pos-1), 10)
        total = total + num
        i = pos + 1
      }
    return `Total is: ${total}` 
}
