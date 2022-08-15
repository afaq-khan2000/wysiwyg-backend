const mongoose = require("mongoose");


const blogSchema = mongoose.Schema({

    description: {
        type: String,
        required: true
    },
    // image: {
    //     type: String
    // },
    date: { type: Date, default: Date.now }
});


const Blog = mongoose.model("Blog", blogSchema);


module.exports.Blog = Blog;