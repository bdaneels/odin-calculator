
// operating functions
const add = function(a, b) {
    return a + b

};

const subtract = function(a, b) {
    return a - b
};

const divide = function (a, b) {
    return a / b
}
const sum = function(array) {
    let result = 0
    for (number in array) {
        result += array[number]
    }
    return result
};


const multiply = function(array) {
    result = 0
    if (typeof(array[0])=== 'number') {
        result = array[0]
    }
    for (let i = 1; i < array.length; i++) {
        result = result * array[i]
    }
    return result

};

const operate = function(operator, a, b){
    a = parseInt(a)
    b = parseInt(b)
    if (operator === "/") {
        return divide(a,b)
    }

    else if (operator === "x") {
        let array = [a, b]
        return multiply(array)
    }

    else if (operator === "+") {
        let array = [a, b]
        return sum(array)
    }

    else if (operator === "-") {
        return subtract(a, b)
    }

}

// storage Variables
const display = document.querySelector(".display");
let displayString = ""
let operator = ""
let displayValueOne = ""
let displayValueTwo = ""
let clearValue = false


const calcButtons = document.querySelectorAll(".button-number");
calcButtons.forEach((button) =>{
    button.addEventListener('click', () =>{

        if (clearValue) {
            displayString = ""
            clearValue = false
        }

        numberText = button.textContent.toString()
        displayString = displayString.concat(numberText)
        display.textContent = displayString

    })


})

const operatorButtons = document.querySelectorAll(".button-operator");
operatorButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.textContent !== "=") {
            operator = button.textContent
        }

        if (displayValueOne === "") {
            displayValueOne = display.textContent
            clearValue = true
        }
        else {
            displayValueTwo = display.textContent
            clearValue = true
        }

        if (button.id === "calculate"){
            console.log(displayValueOne, displayValueTwo, operator)
            let result = operate(operator, displayValueOne, displayValueTwo)
            display.textContent = result
            displayValueOne = result

        }
    })


})


