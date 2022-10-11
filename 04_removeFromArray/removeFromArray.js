const removeFromArray = function(array, ...valuesToRemove) {
  const newArray = [];
  
  match: for (const valueOfArray of array) {
           for(const valueToRemove of valuesToRemove) {
             if (valueOfArray === valueToRemove) continue match;
           }    
               newArray.push(valueOfArray);
         }      
  return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

