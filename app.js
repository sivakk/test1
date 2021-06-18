const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const studentRoutes = require("./backend/users");
const bodyParser = require('body-parser');
var devConfig = require('./backend/env');
const PORT = devConfig.port;
const DATABASE = devConfig.database;





mongoose
    .connect(
        DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology:true,useCreateIndex:true, 
        })
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });


// app.use((req, res, next) => {

//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept,Authorization"
//     );
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//     );
//     next();
// });


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(cors());
app.use("/api", studentRoutes);


app.listen(PORT, function () {
    console.log('Server started on port ' + PORT)
})


module.exports = app;