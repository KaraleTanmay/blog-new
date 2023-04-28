const express = require('express');
const { createBlog, sendBlogs, autoBlogs } = require('../controllers/blogController');

const blogRouter = express.Router()

blogRouter
    .route("/")
    .post(createBlog)

blogRouter
    .route("/:app")
    .get(sendBlogs)

module.exports = blogRouter
