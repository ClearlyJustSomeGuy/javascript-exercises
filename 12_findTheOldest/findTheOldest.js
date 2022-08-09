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



// TOP Solution:

// const findTheOldest = function(array) {
//     return array.reduce((oldest, currentPerson) => {
//       const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//       const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//       return oldestAge < currentAge ? currentPerson : oldest;
//     })
//   };
  
//   const getAge = function(birth, death) {
//     if (!death) {
//       death = new Date().getFullYear();
//     }
//     return death - birth;
//   };
  
//   module.exports = findTheOldest;