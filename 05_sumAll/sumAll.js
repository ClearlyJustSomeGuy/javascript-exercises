const sumAll = function(numOne, numTwo) {
    let sum = 0;
    if (typeof numOne != 'number' || typeof numTwo != 'number') {
        return 'ERROR';
    }
    if (numOne < 0 || numTwo < 0) {
        return 'ERROR';
    }
    if (numOne > numTwo) {
        let tmp = numOne;
        numOne = numTwo;
        numTwo = tmp;
    }
    for (i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
