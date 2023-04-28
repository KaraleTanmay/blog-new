const Blog = require("../models/blogModel")

const dotenv = require('dotenv');


dotenv.config({ path: "./configure.env" });



exports.createBlog = async (req, res, next) => {

    req.body.images = req.body.images.split(",")
    const blog = await Blog.create(req.body)


    res.status(200).json({
        status: "success",
        data: {
            blog
        }
    })
}

exports.sendBlogs = async (req, res, next) => {

    const app = req.params.app

    const blogs = await Blog.find({
        site: app
    })


    res.status(200).json({
        status: "success",
        data: {
            blogs
        }
    })
}
