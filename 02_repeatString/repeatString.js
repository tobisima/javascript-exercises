const repeatString = function(string, num) {
       
  let repeatedString = "";
         
  for(let i = 0; i < num; i++) {
    repeatedString += string;
  }
    return num < 0 ?
           "ERROR" :
           repeatedString;  
};

// Do not edit below this line
module.exports = repeatString;
