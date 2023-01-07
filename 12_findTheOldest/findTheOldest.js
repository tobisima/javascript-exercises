const findTheOldest = function(array) {
  array.map(person => {
    if (!person.yearOfDeath) person.yearOfDeath = new Date().getFullYear();
  });  
  array.sort((a, b) =>
  (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth));
  return array[0];
}

// Do not edit below this line
module.exports = findTheOldest;
