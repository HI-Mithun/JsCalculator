// Calculator Program

const display1 = document.getElementById("display1");
const display2 = document.getElementById("display2");
// var processedInput = display.value.replace(/\^/g, '**');
function appendToDisplay(input)
{
    console.log(input);
    display1.value += input;
}
function erase()
{
    display1.value = display1.value.slice(0, -1);
}
function clearDisplay()
{
    display1.value = "";
    display2.value = "";
}

function calculate()
{
    try
    {
        let processedInput = display1.value.replace(/\^/g, '**');
        display2.value = eval(processedInput);
        
    }
    catch(error)
    {
        display2.value = "Error";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    
    // Function to update the display
    function updateDisplay(value) {
        display1.value += value;
    }

    // Event listener for button clicks
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = this.value;

            if (value === 'C') {
                display1.value = '';  // Clear the display
            } else if (value === '=') {
                display2.value = eval(display1.processedInput);  // Evaluate the expression
            } else {
                updateDisplay(value);  // Update the display
            }
        });
    });


    // Event listener for keyboard input
    document.addEventListener('keydown', function (event) {
        const key = event.key;
        if (!isNaN(key)) {
            // If the key is a number
            updateDisplay(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            // If the key is an operator
            updateDisplay(key);
        } else if (key === 'Enter' || key === '=') {
            // If the user presses Enter, evaluate the expression
            let processedInput = display1.value.replace(/\^/g, '**');
            display2.value = eval(processedInput);
        } else if (key === 'Escape') {
            // If the user presses Escape, clear the display
            display1.value = '';
        }
    });
});
