const input = require('./day01-input')

const main = () => {
    let sum = 0;
    input.forEach(item => {
        let l = 0, r = item.length - 1;
        let number = '';

        while(number.length < 1) {
            if(Number.isInteger(1 * item[l]))
                number += item[l];
            
            l++;
        }

        while(number.length > 0 && number.length < 2) {
            if(Number.isInteger(1 * item[r])) 
                number += item[r];
        
            r--;
        }

        sum += (1 * number);
    });

    return sum;
}

console.log(main())