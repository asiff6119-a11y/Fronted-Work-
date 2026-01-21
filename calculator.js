let display = "";
const displayInput = document.getElementById("display");

// Append number or operator
function press(value) {
    display += value;
    displayInput.value = display;
}

// Delete last character
function deleteOne() {
    display = display.slice(0, -1);
    displayInput.value = display;
}

// Clear display
function clearDisplay() {
    display = "";
    displayInput.value = "";
}

// Calculate result
function calculate() {
    try {
  
        display = eval(display);
        displayInput.value = display;
    } catch (error) {
        displayInput.value = "Error";
        display = "";
    }
}


function trig(func) {
    try {
        let number = parseFloat(display);
        let result;

        switch(func) {
            case 'sin':
                result = Math.sin(number * Math.PI / 180);
                break;
            case 'cos':
                result = Math.cos(number * Math.PI / 180);
                break;
            case 'tan':
                result = Math.tan(number * Math.PI / 180);
                break;
            case 'asin':
                result = Math.asin(number) * 180 / Math.PI;
                break;
            case 'acos':
                result = Math.acos(number) * 180 / Math.PI;
                break;
            case 'atan':
                result = Math.atan(number) * 180 / Math.PI;
                break;
        }

        display = result.toFixed(6); // limit decimal places
        displayInput.value = display;
    } catch (error) {
        displayInput.value = "Error";
        display = "";
    }
}
