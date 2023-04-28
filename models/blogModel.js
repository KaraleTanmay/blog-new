const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    images: [String],
    site: {
        type: String,
        enum: {
            values: ["resumebyte", "supremewriter", "writebing", "qodeit"],
            message: "ony easy,medium and difficult are allowed"
        }
    },
    others: {
        type: mongoose.Schema.ObjectId,
        ref: "Blogs"
    }
})

const Blog = mongoose.model("Blogs", blogSchema)

module.exports = Blog
