/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up


*/
function calculateTime(n) {
    const startTime = new Date;
    // const startMinute = startTime.getMinutes();
    // const startSecond = startTime.getSeconds();
    // console.log(startMinute+':'+startSecond);
    console.log("\n"+startTime);
    
    let sum = 0;
    let i = 1;
    while(i<=n){
        sum +=i;
        i++;
    }
    console.log(sum);
    const endTime = new Date;
    // const endMinute = endTime.getMinutes();
    // const endSecond = endTime.getSeconds();
    // console.log(endMinute+':'+endSecond);
    console.log(endTime+"\n");
    
    const takentime = (endTime - startTime)/1000;
    return takentime;
    
    if(endMinute>startMinute){
            const takenMinutes = endMinute - startMinute;
            const DurationTime = takenMinutes*60 + endSecond;
            const takenSeconds = DurationTime - startSecond;
        
            return takenSeconds;
        }
        else{
                const takenSeconds = endSecond-startSecond;
                const takentime = endTime - startTime;
                return takenSeconds;
            }
            
    // const timeTaken = endTime - startTime;
    // return 0.01;
} 


let firstSum = calculateTime(98);
let secondSum = calculateTime(100000);
let thirdSum = calculateTime(900000000);

console.log(firstSum+"\n");
console.log(secondSum+"\n");
console.log(thirdSum+"\n");