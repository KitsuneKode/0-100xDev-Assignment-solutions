// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

//1 1st approach


// let count = 1;

// while(true){
//     setTimeout(() => {
//         let counter = count;
//         console.log("Counter is ", counter);
//         count++;
//     }, 1000);
// }





// let count = 1;
// let maxCount = 5;

// while(count <= maxCount){
//     setTimeout(() => {
//         console.log("Counter is ", count);
//     }, 1000);
//     count++;
// }


// The code above doesnot works because the while loop keeps the js thread busy forever and the setTimeout()  is always stuck in the callback queue. So the code below is a better approach to the problem. To make it log regardless of the counting without the time factor being involved, we can just add a end factor for the while loop like the one below but here only the latest time is logged

//2 2nd approach



function myCounter(count){
    
    setTimeout(() => { 
        console.log("Counter is ", count);
        count++;
        myCounter(count);
    }, 1000);
}

let startCount = 1;
myCounter(startCount);

// Hint: You can use a function that calls itself after a certain amount of time. This is called a recursive function. You can also use setTimeout to call the function after a certain amount of time. This way, you can create a counter that logs the current count every second. You can also add a maximum count to stop the counter after a certain amount of time.




























































// (Hint: setTimeout)