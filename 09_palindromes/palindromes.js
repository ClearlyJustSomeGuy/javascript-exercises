const palindromes = function (string) {
    let array = [];
    let lowerString = string.toLowerCase();

    //Strip out non-lowerAlphas
    for (let i = 0; i < lowerString.length; i++) {
        if (lowerString.charCodeAt(i) < 123 && 
            lowerString.charCodeAt(i) > 96) {
                array.push(lowerString[i]);
        }
    }
    // console.log(array);

    let len = Math.floor(array.length / 2);
    for (let i = 0; i < len; i++) {
        if (array[i] !== array[array.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
