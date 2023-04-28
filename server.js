const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: "./configure.env" });
process.on("uncaughtException", (err) => {
    console.log("uncaught exception.. shutting down");
    console.log("error", err);
    process.exit(1);
})

// mongoDb connection

mongoose.connect(process.env.DATABASE_CONNECTION)
    .then(() => {
        console.log("db connected");
    }).catch((err) => {
        console.log("db not connected" + err);
    })

// listen on port

const server = app.listen(process.env.port || 6000, () => {
    console.log("server has been started");
})

process.on("unhandledRejection", (err) => {
    console.log("unhandled rejection.. shutting down");
    console.log("error", err.name, err.message);
    server.close(() => {
        process.exit(1);
    })
})

// 0XthXOHdgtmSwjNV
