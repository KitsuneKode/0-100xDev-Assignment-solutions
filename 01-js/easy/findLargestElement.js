/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9

*/

function findLargestElement(numbers) {
    let largest;
    for(let i = 0; i<numbers.length; i++)
    {  
        if(i ===0){
            largest = Number.MIN_SAFE_INTEGER;
            //Minimum safe number in the javascript
        }

        if(numbers[i]>largest)
        {
            largest = numbers[i];
        }
    }
    return largest;
}

result = findLargestElement([3, 7, 2, 9, 1])
console.log(result)

module.exports = findLargestElement;