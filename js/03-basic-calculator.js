// IMPORT THE MODULE
import {add, subtract, multiply, divide} from "js/modules/calculator.js"

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let number1 = Number(prompt('Enter the first number:'))
let number2 = Number(prompt('Enter the second number:'))
let operation = prompt("What operation would like to perform: (+, -, *, /) and store that in a variable.")

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
let result = 0
switch(operation) {
    case "+":
        result = add(number1,number2)
    case "-":
        result = subtract(number1,number2)
    case "*":
        result = multiply(number1,number2)
    case "/":
        result = divide(number1,number2)
    default:
        alert("That is not an option")
}

alert(`The result of ${number1} ${operation} ${number2} is ${result}`)