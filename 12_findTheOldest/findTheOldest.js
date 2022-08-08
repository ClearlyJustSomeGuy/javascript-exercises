const findTheOldest = function(people) {
    let ages = [];
    const year = new Date().getFullYear();
    for (const person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = year;
        }
        // console.log(person);
        ages.push(getAge(person.yearOfBirth, person.yearOfDeath));
    }
    let max = Math.max(...ages);
 
    for (const person of people) {
        if (max === getAge(person.yearOfBirth, person.yearOfDeath)) {
            console.log(person);
            return person;
        }
    }


};

function getAge(birthYear, deathYear) {
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;