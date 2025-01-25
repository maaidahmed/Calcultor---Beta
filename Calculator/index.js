//Calculator

const display = document.getElementById("dsiplay");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculator(){
    display.value = eval(display.value)
}

function backSpace() {
    display.value = display.value.slice(0, -1);
  }