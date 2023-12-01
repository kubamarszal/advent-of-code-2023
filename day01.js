const read = require('./day01-input')

const TABLE = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'twone': '21',
    'eightwo': '82',
    'eighthree': '83',
    'oneight': '18',
    'threeight': '38',
    'fiveight': '58',
    'nineight': '98',
    'sevenine': '79',
}
const one = '[1-9]';
const two = 'twone|eightwo|eighthree|oneight|threeight|fiveight|nineight|sevenine|one|two|three|four|five|six|seven|eight|nine|[1-9]';

const transit = (input, regexp) => {
    let result = 0;
    input.forEach(item => {
        let str = '';
        const arr = Array(...item.matchAll(regexp));
        const first = arr[0][0];
        const last = arr[arr.length - 1][0];
        str += Number.isNaN(first * 1) ? TABLE[first] : first;
        str += Number.isNaN(last * 1) ? TABLE[last] : last;
        result += str.length > 2 ? `${str[0]}${str[2]}` * 1 : str * 1;
    });
    return result;
}

console.log(`FIRST STAR SOLUTION: ${transit(read, one)}`);
console.log(`SECOND STAR SOLUTION: ${transit(read, two)}`);
