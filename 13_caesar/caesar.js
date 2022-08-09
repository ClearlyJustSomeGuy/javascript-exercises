const caesar = function(phrase, key) {
    let cypher = [];
    if (key < 0) {
        key = (key % 26) + 26;
    }
    for (let i = 0; i < phrase.length; i++) {
        if (!checkAlpha(phrase[i])) {
            cypher.push(phrase[i]);
        } else {
            cypher.push(getCypher(phrase[i], key));
        }
    }    

    // console.log(cypher.join(''));
    return cypher.join('');

};

function checkAlpha(char) {
    let ascii = char.charCodeAt(0);
    if ((ascii >= 97 && ascii <= 122) || (ascii >= 65 && ascii <= 90)) {
        return true;
    }
    return false;
}

function getCypher(char, key) {
    let ascii = char.charCodeAt(0);
    // Upper case conversion
    if (char.toUpperCase() === char) {
        if ((ascii - 65 + key) >= 26) {
            ascii = ((ascii - 65 + key) % 26) + 65;
        } else {
            ascii = key + ascii;
        }
    // Lower case conversion
    } else {
        if ((ascii - 97 + key) >= 26) {
            ascii = ((ascii - 97 + key) % 26) + 97;
        } else {
            ascii = key + ascii;
        }
    }
    return String.fromCharCode(ascii);
}
// Do not edit below this line
module.exports = caesar;
