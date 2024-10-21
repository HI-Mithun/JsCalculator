// Calculator Program

const display = document.getElementById("display1");
const display2 = document.getElementById("display2");
function appendToDisplay(input)
{
    display.value += input;
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
        display2.value = eval(display.value);
    }
    catch(error)
    {
        display2.value = "Error";
    }
}