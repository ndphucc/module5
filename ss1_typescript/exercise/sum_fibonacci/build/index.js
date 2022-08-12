"use strict";

// happy coding 👻
function fibonacci(numberFirst, numberSecond, amount) {
    let arr = [numberFirst + numberSecond];
    if (amount > 1) {
        return arr.concat(fibonacci(numberSecond, numberFirst + numberSecond, amount - 1));
    } else {
        return arr;
    }
}

let sum = 0;
for (let number of fibonacci(0, 1, 5)) {
    console.log(number);
    sum += number;
}
console.log(sum);
