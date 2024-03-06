/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  

  //character sorting approach 
  let str1Sorted = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  let str2Sorted = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
 
  return str1Sorted == str2Sorted;
}

// str= isAnagram("animate", "mateani");
// console.log(str)
module.exports = isAnagram;




 // console.log(str1Sorted);
  // let str2Sorted = str2.replace(/\s/g, '');
  
  // Array.from(StR1).forEach(char => {
  //   if (str2WithoutSpace.indexOf(char) === -1) {
  //     // If any character is not found in the second string, set result to false
  //     result = false;
  //   }
  //   else{
  //     return true;
  //   }
  // });
