const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const blogRouter = require('./routes/blogRouter');

const app = express()



app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
    origin: '*'
}));


app.use("/blogs", blogRouter)

//  for invalid url

app.all("*", (req, res, next) => {
    res.status(404).json({
        message: "this route is not implemented"
    })
})

module.exports = app
