/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let cleanedStr = str.replace(/\s/g, '').toLowerCase();    //regular expression that removes white space
    let vowelCount = 0;
    for(let i = 0; i<cleanedStr.length; i++){
      if(cleanedStr[i] === "a" || cleanedStr[i] === "e" || cleanedStr[i] === "o" || cleanedStr[i] === "u" || cleanedStr[i] === "i"){
        vowelCount ++;
      }
    }
    return vowelCount;
}

module.exports = countVowels;