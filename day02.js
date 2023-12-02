const data = require('./day02-input');

const RED = 12, GREEN = 13, BLUE = 14;

const checkRestrictions = (cubes) => {
    const { green, red, blue } = cubes;
    return green <= GREEN && blue <= BLUE && red <= RED;
}

const getID = (line) => {
    return line.split(':')[0].split(' ')[1] * 1;
}

const isValidLine = (sets) => {
    let valid = true;

    sets.forEach(set => {
        const obj = {
            red: 0,
            blue: 0,
            green: 0,
        };

        set.split(',').forEach(elem => {
            const [val, key] = elem.trim().split(' ');
            obj[key] += val * 1;
        })

        if(valid && !checkRestrictions(obj)) {
            valid = false;
        }
    });
    
    return valid;
}

const getMaxCubes = (sets) => {
    const maxObj = {
        red: 0,
        blue: 0,
        green: 0,
    };

    sets.forEach(set => {
        const obj = {
            red: 0,
            blue: 0,
            green: 0,
        };

        set.split(',').forEach(elem => {
            const [val, key] = elem.trim().split(' ');
            if(maxObj[key] < val)
                maxObj[key] = val * 1;
        })
    });
    
    let power = 1;

    for (const key in maxObj) {
        power *= maxObj[key]
    }

    return power;
}

const main = (input) => {
    let total1stPart = 0, total2ndPart = 0;

    input.forEach(line => {
        const sets = line.split(':')[1].trim().split(';');
        total1stPart += isValidLine(sets) ? getID(line) * 1 : 0;
        total2ndPart += getMaxCubes(sets);
    });

    return { total1stPart, total2ndPart };
}

const { total1stPart, total2ndPart } = main(data)
console.log(`FIRST STAR SOLUTION: ${total1stPart}`);
console.log(`SECOND STAR SOLUTION: ${total2ndPart}`);