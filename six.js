const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function isNumber(s) {
    const regex = /^[-+]?(\d+(\.\d*)?|\.\d+)([eE][-+]?\d+)?$/;
    return regex.test(s);
}

rl.question('문자열을 입력하세요: ', (input) => {
    const result = isNumber(input);
    console.log(result);
    rl.close();
});
