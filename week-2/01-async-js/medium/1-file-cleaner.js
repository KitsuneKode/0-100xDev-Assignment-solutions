// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman



// ```

let fs = require('fs');

fs.readFile('text.txt', 'utf8', (err, data) => {
    if(err)
        console.error(err);
    else{
        console.log("Given data", data);
        let content = data.replace(/\s+/g, " ");
        fs.writeFile('text.txt', content, (err) => {
            if(err)
                console.error(err);
            else
                console.log("File cleaned successfully");
        });
        fs.readFile('text.txt', 'utf8', (err, data) => {
            if(err)
                console.error(err);
            else
                console.log("Cleaned data", data);
        });
    }
});

