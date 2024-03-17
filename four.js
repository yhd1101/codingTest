const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('배열의 요소를 입력하세요 (숫자 사이에 공백을 넣어주세요): ', (input) => {
    const nums = input.trim().split(' ').map(Number);
    let currentPosition = 0; // 현재 위치
    let steps = 0; // 이동 횟수

    while (currentPosition < nums.length - 1) {
        let maxJump = 0;
        let nextPosition = currentPosition;

        for (let i = 1; i <= nums[currentPosition]; i++) {
            if (currentPosition + i >= nums.length - 1) {
                steps++;
                console.log('최소 이동 횟수:', steps);
                rl.close();
                return;
            }

            if (i + nums[currentPosition + i] > maxJump) {
                maxJump = i + nums[currentPosition + i];
                nextPosition = currentPosition + i;
            }
        }

        // 다음 위치로 이동
        currentPosition = nextPosition;
        steps++; // 이동 횟수 증가
    }

    console.log('최소 이동 횟수:', steps);
    rl.close();
});
