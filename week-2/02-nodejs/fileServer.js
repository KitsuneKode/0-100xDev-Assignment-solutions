/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

// function nameOfFilesInDirectory(path) {
//   return (noOfFiles = new Promise((resolve, reject) => {
//     fs.readdir(path, (err, files) => {
//       resolve(files);
//     });
//   }));
// }

// function readFile(path){
//   return fileContent = new Promise((resolve)=>{
//     fs.readFile(path, 'utf-8', (err, data)=>{
//       resolve(data);
//     })
//   })
// }

app.get("/files", async (req, res) => {
  const pathFile = path.join(__dirname, "./files/");

  const namesOfFiles = await new Promise((resolve, reject) => {
    fs.readdir(pathFile, (err, files) => {
      if (err) {
        return res.status(500).json({ error: "Failed to retrieve files" });
      }
      resolve(files);
    });
  });

  // console.log(namesOfFiles);

  res.status(200).json({ Filenames: namesOfFiles });
});

app.get("/file/:filename", async (req, res) => {
  const input = req.params.filename;

  console.log(input);

  const fileData = await new Promise((resolve) => {
    fs.readFile(
      path.join(__dirname, "/files/", input),
      "utf-8",
      (err, data) => {
        if (err) {
          return res.status(404).send("File not found");
        }
        resolve(data);
      }
    );
  });

  res.status(200).send(fileData);
});

//The app.all('*', ...) route is a wildcard route that matches any HTTP method ('*'), and it will be triggered for all routes that haven't been explicitly defined.

app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});

// app.use((req, res) => {
//   res.status(404).send("Not Found");
// });

// app.listen(port, () => {
//   console.log("connected to port");
// });

module.exports = app;
