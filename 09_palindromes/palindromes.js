const palindromes = function (string) {
  const arr = string.toLowerCase()
                    .split('')
                    .filter(char => !(char === '!' || char === '.'|| 
                                      char === ',' || char === ' '));
                                 
  return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
