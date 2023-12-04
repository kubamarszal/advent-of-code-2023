const fs = require('fs');
const fileContent = fs.readFileSync('./day04-input.dat').toString();
const master = fileContent.split('\n');

const part1 = () => {
    let sum = 0;
    master.forEach(item => {
        let points = 0;
        const obj = {}
        const [winning, my] = item.split(':')[1].trim().split('|');
        const wins = winning.trim().split(' ');
        const mys = my.trim().split(' ');

        wins.forEach(win => obj[win] = true);
        mys.forEach(my => {
            if(obj[my] && points == 0) {
                points = 1;
            } else if (obj[my] && points > 0) {
                points *= 2;
            }
        })
        sum += points;
    })
    return sum;
}

console.log(`Part1 solution: ${part1()}`)