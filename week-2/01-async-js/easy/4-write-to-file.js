// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

console.log("Doing nothing1");
for(let i = 0; i < 1000000000; i++){
    // Do nothing
}

content = "Hello, this is a sample text file and I am writing to it using Node.js.dasas";

console.log("before Writing to the file");

fs.writeFile('text.txt', content, (err) => {                                // This will create a new file if it does not exist amd write the content to the file but  
    console.log("After writing to the file");                              // if the file already exists then it will overwrite the content of the file
    if(err)
        console.error(err);
    else
        console.log("File written successfully");
});

console.log("Doing nothing2");
for(let i = 0; i < 1000000000; i++){
    // Do nothing
}

let addContent = "This is the content that I am appending to the file.";

console.log("before Appending to the file");


fs.appendFile('text.txt', addContent, (err) => {                        // This will create a new file if it does not exist  and append the content to the file but
    if(err)                                                             // if the file already exists then it will append the content to the file
        console.error(err);
    else
        console.log("File appended successfully");
});


console.log("before Reading the file");

fs.readFile('text.txt', 'utf8', (err, data) => {                    // This will read the content of the file and print it to the console
    console.log("After reading the file");
    if(err)
        console.error(err);
    else
        console.log(data);
});