// happy coding 👻
function fibonacci(numberFirst: number, numberSecond: number, amount: number): Array<number> {
    let arr: Array<number> = [numberFirst + numberSecond];
    if (amount > 0) {
        return arr.concat(fibonacci(numberSecond, numberFirst + numberSecond, amount - 1));
    } else {
        return arr
    }
}
for (let number of fibonacci(0,1,5)){
    console.log(number);
}