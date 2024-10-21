// Calculator Program

const display = document.getElementById("display1");
const display2 = document.getElementById("display2");

function appendToDisplay(input)
{
    console.log(input);
    display.value += input;
    // display.value += (input=='^')? '**': input;

    
    
}
function erase()
{
    display.value = display.value.slice(0, -1);
}
function clearDisplay()
{
    display.value = "";
    display2.value = "";
}

function calculate()
{
    try
    {
        let processedInput = display.value.replace(/\^/g, '**');
        display2.value = eval(processedInput);
        
    }
    catch(error)
    {
        display2.value = "Error";
    }
}