/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve) => {
        const start = Date.now();
    
        while (Date.now() - start < milliseconds){
            //Busy wait
        };

        // setTimeout(resolve, milliseconds);
        resolve();
        
    });

}

// sleep(1000).then(() => {
//     console.log("dpme")})

// s = sleep(2002);
// console.log(s);
// data = "done";

// s.then(()=> {console.log(data);})

// setTimeout(()=>{
//     console.log(s);
// }, 3000)


// console.log(Date.now())

// setTimeout(()=>{
//     console.log(Date.now());
// }, 1000);
module.exports = sleep;
