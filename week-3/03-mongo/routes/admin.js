const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const username = req.headers.username;
    const password= req.headers.password;

    await Admin.create({
        username,
        password
    })

    res.status(200).json({
        message: 'Admin created successfully' 
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;
    const published = req.body.published !== undefined ? req.body.published : true;
    console.log(published)
    
    const newCourse = await Course.create({
        title, 
        description,
        imageLink,
        price,
        published,
    })

    res.status(200).json({message: 'Course created successfully', 
    courseId:newCourse.id})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({});
    res.status(200).json({
        Courses : response
    })
});

module.exports = router;