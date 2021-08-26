function updateValue(value) {
    document.getElementsByName('inputfield')[0].value += value;
}

function clearInput() {
    document.getElementsByName('inputfield')[0].value = '';
}

function calculate() {
    let input = document.getElementsByName('inputfield')[0].value;
    let result = evaluate(input);
    document.getElementsByName('inputfield')[0].value = result;
}

function evaluate(string) {
    const actions = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }
    const nrsPatt = /[^\+\-\*\/]+/g;
    const actionsPatt = /[\+\-\*\/]/g;
    let nrs = [...string.matchAll(nrsPatt)].map(x => Number(x[0]));
    let commands = [...string.matchAll(actionsPatt)].map(x => x[0]);
    while (nrs.length > 1) {
        if (commands.includes('*') || commands.includes('/')) {
            let opIndex;
            if(commands.indexOf('*') == -1){
                opIndex = commands.indexOf('/');
            }else if(commands.indexOf('/') == -1){
                opIndex = commands.indexOf('*');
            }else{
                opIndex = Math.min(commands.indexOf('*'), commands.indexOf('/'));
            }
            let temp = actions[commands[opIndex]](nrs[opIndex], nrs[opIndex + 1]);
            commands.splice(opIndex, 1);
            nrs.splice(opIndex, 2, temp);
        } else {
            opIndex = 0;
            let temp = actions[commands[opIndex]](nrs[opIndex], nrs[opIndex + 1]);
            commands.splice(opIndex, 1);
            nrs.splice(opIndex, 2, temp);
        }
    }
    return nrs[0];
}
