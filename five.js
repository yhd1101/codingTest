const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nums = [];
let k = 0;
let result = [];
rl.question('배열의 요소를 입력하세요 (숫자 사이에 공백을 넣어주세요): ', (input) => {
    nums = input.trim().split(' ').map(Number);
    rl.question('k 값을 입력하세요: ', (inputK) => {
        k = parseInt(inputK);
        let len = [k];
        let i = 0;
        while (i < nums.length) {
            if (i + k > nums.length) {
                break;
            }

            let slice = nums.slice(i, i + k);
            let max = Math.max(...slice);
            result.push(max);

            i++;
        }
        console.log(result)

        rl.close();
    });

});
