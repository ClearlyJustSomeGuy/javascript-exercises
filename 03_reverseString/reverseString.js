const reverseString = function(string) {
    let newString = [];
    for (i = 0; i < string.length; i++) {
        newString.unshift(string[i]);
        // console.log(newString);
    }
    return newString.join('');

};

// Do not edit below this line
module.exports = reverseString;
