// Middleware for handling auth
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config")
const {Admin} = require("../db")

async function adminMiddleware (req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        jwt.verify(jwtToken, JWT_SECRET);
        const decoded = jwt.decode(jwtToken);
        const username = decoded.username;

        const result = await Admin.find({
            username
        })

        if(result.length === 0){
            res.status(403).json({
                msg: "Admin doesnot exist"
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

module.exports = adminMiddleware;