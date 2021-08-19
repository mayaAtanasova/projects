function updateValue(value) {
    document.getElementsByName('inputfield')[0].value += value;
}

function clearInput() {
    document.getElementsByName('inputfield')[0].value = '';
}

function calculate() {
    let input = document.getElementsByName('inputfield')[0].value;
    let result = eval(input);
    document.getElementsByName('inputfield')[0].value = result;
}
