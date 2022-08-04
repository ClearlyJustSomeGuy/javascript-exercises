const removeFromArray = function(myArray, ...theArgs) {
    let length = theArgs.length;
    for (let i = 0; i < length; i++) {
        for (let k = 0; k < myArray.length; k++) {
            if (myArray[k] === theArgs[i]) {
                myArray.splice(k, 1);
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
