var express = require('express');
var multer = require('multer');
var router = express.Router();
const { Blog } = require("../models/blog");
const mongoose = require("mongoose");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads/blogs");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});

const upload = multer({ storage: storage });


router.post('/upload', upload.single('file'), (req, res) => {
    console.log("starting upload...", req.file)

    res.json('http://localhost:4000/uploads/blogs/' + req.file.filename);
});

router.get('/', async function (req, res, next) {
    const blogs = await Blog.find();
    res.send(blogs);
});

router.post('/post', async function (req, res, next) {
    // const description = req.body;
    // console.log(description);
    const blog = new Blog(req.body);
    await blog.save();
    res.send(blog);
});


module.exports = router;
