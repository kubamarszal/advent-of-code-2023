const fs = require('fs');
const fileContent = fs.readFileSync('./day03-input.dat').toString();

let masterArray = [];

fileContent.split('\n').forEach((line, idx) => {
    masterArray[idx] = [];
    for(let i=0;i<line.length;i++) {
        masterArray[idx].push(line[i]);
    }
})

const verifySorroundingChars = (x, y) => {
    let count = 0;

    const modArr = [
        [-1, -1],
        [0, -1],
        [1, -1],
        [-1, 0],
        [1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
    ]
    
    modArr.forEach(modifier => {
        const modified = masterArray[x+modifier[0]][y+modifier[1]]

        if(Number.isNaN(modified * 1) && modified !== '.' && modified !== undefined) {
            count++;
        }
    })

    return count > 0;
}

const verifySorroundingNumbers = (x, y) => {
    let count = 0;

    const modArr = [
        [-1, -3],
        [1, 3],
    ]
    
    modArr.forEach(modifier => {
        const modified = masterArray[x+modifier[0]][y+modifier[1]]

        if(Number.isInteger(modified * 1)) {
            
        }
    })

    return count === 2;
}

const part1 = () => {
    let sum = 0;

    for(let i=1;i<=masterArray.length - 1;i++) {
        let number = '', isValid = false;
        for(let j=1;j<=masterArray[i].length - 1;j++) {
            if(Number.isInteger(masterArray[i][j] * 1)) {
                number += masterArray[i][j]
                if(!isValid) {
                    isValid = verifySorroundingChars(i, j);
                }
            } else {
                if(isValid) {
                    sum += number*1;
                }
                number=''
                isValid=false
            }
        }
    }

    return sum;
}

const part2 = () => {
    let sum = 0;

    for(let i=1;i<=masterArray.length - 1;i++) {
        for(let j=1;j<=masterArray[i].length - 1;j++) {
            if(masterArray[i][j] === '*') {
                if(verifySorroundingNumbers(i, j)) console.log(i,j);
            }
        }
    }

    return sum;
}

console.log(`Part 1 solution: ${part1()}`);
console.log(`Part 1 solution: ${part2()}`);