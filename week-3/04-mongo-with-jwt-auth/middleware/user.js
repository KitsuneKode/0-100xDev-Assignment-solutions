const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const {User} = require("../db")


async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        jwt.verify(jwtToken, JWT_SECRET);
        const decoded = jwt.decode(jwtToken);
        const username = decoded.username;

        const result = await User.find({
            username
        })

        if(result.length === 0){
            res.status(403).json({
                msg: "User doesnot exist"
            })
        }
        else{
            req.username = username;
            next();
        }
    }catch(err){
        res.status(411).json({
            msg: "Wrong token"
        })
    }
}

module.exports = userMiddleware;