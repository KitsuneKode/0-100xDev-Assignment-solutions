/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
}

function wait2(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
}

function wait3(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    return wait1(t1).then(()=>{
        return wait2(t2).then(()=>{
            return wait3(t3).then(()=>{
                return Date.now() - start;
            })
        })
    })
}

//This function uses Promise chaining to execute wait1(t1), wait2(t2), and wait3(t3) sequentially. First, wait1(t1) is executed. Once it resolves, wait2(t2) is executed. Once that resolves, wait3(t3) is executed. After all these Promises have resolved, the sum of t1, t2, and t3 is returned.

// The key difference between these two pieces of code is the order of execution. In the first piece of code, the wait functions are executed in parallel, while in the second piece of code, they are executed sequentially.


// calculateTime(1000, 2000, 3000).then((time) => {console.log(time);})

module.exports = calculateTime;
