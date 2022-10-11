const sumAll = function(firstInt, secondInt) {
  
  if (!Number.isInteger(firstInt) || firstInt <= 0 ||
      !Number.isInteger(secondInt) || secondInt <= 0) {
      return 'ERROR';
  } 
    let reversedFirstInt = secondInt;
    let reversedSecondInt = firstInt;
    let sum = 0;
    
  if (firstInt > secondInt) {
      firstInt = reversedFirstInt;
      secondInt = reversedSecondInt;
  }
    for(let i = firstInt; i <= secondInt; i++) {
      sum += i;
    }
  
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
