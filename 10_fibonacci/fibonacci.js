const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num == 1) return 1;

    let a = 0;
    let b = 1;
    let c = 0;
    for (let i = 1; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
