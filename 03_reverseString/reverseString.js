const reverseString = function(string) {
  const array = Array.from(string);
  const reversedArray = array.reverse();
  return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
