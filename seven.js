const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let width = 0;
let result = [];

rl.question('배열을 입력하세요: ', (input) => {
    const wordsArray = input.trim().split(' ');

    rl.question("넓이를 입력하세요: ", (inputWidth) => {
        width = parseInt(inputWidth);

        let line = '';
        for (let word of wordsArray) {
            if ((line + word).length <= width) {
                line += word + ' ';
            } else {
                result.push(line.trim().padEnd(width, ' ')); //trim= 좌우제거공백, padEnd=나머지 채우기
                line = word + ' ';
            }
        }
        // 마지막 줄 추가
        if (line.length > 0) {
            result.push(line.trim().padEnd(width, ' '));
        }

        // 결과 출력
        console.log('정렬된 배열:');
        result.forEach(line => console.log(line));

        rl.close();
    });
});
