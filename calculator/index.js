const display = document.getElementById('display');

function calculateValue(value) {
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateOutput() {
    display.innerText = eval(display.innerText);
}

function clearDisplay() {
    display.innerText = '0';
}



