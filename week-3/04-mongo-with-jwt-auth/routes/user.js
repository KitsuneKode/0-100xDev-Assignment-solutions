const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")
const { JWT_SECRET } = require("../config")
const jwt = require("jsonwebtoken")

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password= req.headers.password;

    await User.create({
        username,
        password
    })

    res.status(200).json({
        message: 'User created successfully' 
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password
    
    const adminExists = await User.find({
        username,
        password
    })
    if(adminExists.length === 0){
        res.status(411).json({msg:"Wrong username & password"})
    }else{
        const token = jwt.sign({
            username,
            password
        },JWT_SECRET)

        res.status(200).json({
            token : token
        })
    }
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.status(200).json({
        Courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;


    await User.updateOne({
        username: req.username
    },
    {
        "$push": {
            purchasedCourses : courseId
        } 
    })

    res.status(200).json({ message: 'Course purchased successfully'})
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username: req.username
    });
    const courses = await Course.find({
        _id:{
            "$in": user.purchasedCourses
        }
    })


    res.status(200).json({
        purchasedCourses : courses
    })
});

module.exports = router