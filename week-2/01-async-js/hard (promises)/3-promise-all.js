/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
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
   return Promise.all([wait1(t1),wait2(t2),wait3(t3)]).then(() => {
    return Date.now() - start;
});
}

// This function uses Promise.all() to execute wait1(t1), wait2(t2), and wait3(t3) in parallel. These functions each return a Promise that resolves after a delay of t1, t2, and t3 milliseconds, respectively. Once all these Promises have resolved, the .then() block is executed, which returns the sum of t1, t2, and t3.

// calculateTime(1000, 2000, 3000).then((time) => {console.log(time);})

module.exports = calculateTime;
