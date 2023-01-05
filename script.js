
// operating functions
const add = function(a, b) {
    return a + b

};

const subtract = function(a, b) {
    return a - b
};

const divide = function (a, b) {
    if (b === 0) {
        return "You can't divide by 0. Press clear"
    }
    else {return a / b}

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
let activeOperatorButton = ""
let firstCalc = true

const operatorButtons = document.querySelectorAll(".button-operator");
const calcButtons = document.querySelectorAll(".button-number");

// page functionality

calcButtons.forEach((button) =>{
    button.addEventListener('click', () =>{

        if (clearValue) {
            displayString = ""
            clearValue = false
        }

        numberText = button.textContent.toString()
        displayString = displayString.concat(numberText)
        display.textContent = displayString
        if (activeOperatorButton !== "") {
            activeOperatorButton.classList.remove("active")
        }


    })


})


operatorButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        if (button.textContent !== "=" && button.textContent !== "Delete"
            && button.textContent !== "Clear" ) {
            operator = button.textContent

        }

        if (button.textContent !=="=" && button.textContent !== "Delete" &&
        button.textContent !=="Clear"){
            if (activeOperatorButton !== button) {
                operatorButtons.forEach((button) => {
                    button.classList.remove("active")
                })
            }
            button.classList.toggle("active")
            activeOperatorButton = button

        }
        if (firstCalc && button.textContent !== "=" && button.textContent !== "Delete"
        && button.textContent !== "Clear") {
            displayValueOne = display.textContent
            clearValue = true
            firstCalc = false
        }
        else {
            displayValueTwo = display.textContent
            clearValue = true
        }

        if(button.id === "delete" && firstCalc === true) {
            display.textContent = display.textContent.slice(0,-1)
            displayValueOne = display.textContent

        } else if(button.id === "delete") {
            display.textContent = display.textContent.slice(0,-1)
            displayValueTwo = display.textContent
        }

        if (button.id === "calculate"){
            console.log(displayValueOne, displayValueTwo, operator)
            let result = operate(operator, displayValueOne, displayValueTwo)
            display.textContent = result;
            displayValueOne = result;

        }

        if(button.id === "clear") {
            display.textContent = "0"
            displayValueOne = ""
            displayValueTwo = ""
            displayString = ""
            operator = ""
            firstCalc = true
            if (activeOperatorButton !== "") { operatorButtons.forEach((button) => {
                button.classList.remove("active")
            })

            }
            activeOperatorButton = ""
        }
    })


})


