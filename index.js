const display = document.getElementById("display");

function toDisplay(input) {
    display.value += input
}

function toClear() {
    display.value = " ";
}

function calculate() {
    try{
    display.value = eval(display.value);
    }
    catch(erros) {
    display.value = "Error";
    }
}