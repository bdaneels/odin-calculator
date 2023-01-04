let display = document.querySelectorAll("#screen");



const calcButtons = document.querySelectorAll(".button-operator, .button-number");
calcButtons.forEach((button) =>{
    button.addEventListener('click', () =>{
        console.log(button.id)
        numberText = button.id.toString()
        display.textContent = `${numberText}`;
        console.log(display.textContent)
    })


})


console.log(calcButtons)