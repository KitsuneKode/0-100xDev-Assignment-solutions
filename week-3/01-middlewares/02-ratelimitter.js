const request = require('supertest');
const assert = require('assert');
const express = require('express');
const { error } = require('console');
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)


function rateLimiter(req, res, next){
  const userid = req.headers['user-id'];
  const userExist = numberOfRequestsForUser[userid];
  // console.log(userExist +"start");

  if(userExist){
    let count = numberOfRequestsForUser[userid];
    // console.log(count);
    count++; 
    if (count>5){
      // console.log("error")
      res.status(404).json({msg: "More than 5 request per second is not allowed"})
    }
    else{
      // console.log("count increased")
      numberOfRequestsForUser[userid] = count;
      next();
    }
  }
  else{
    // console.log("added count")
    let count = 1
    numberOfRequestsForUser[userid] = count;
    next();
  }
}

app.use(rateLimiter);

app.get('/user', function(req, res) {

  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

// app.listen(3000);
module.exports = app;