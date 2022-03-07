var express = require("express");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var user = require("./Routes/User");
var user = require("./Routes/User");
var Task = require("./Routes/Tasks");
var {getUser} = require("./Middleware/User")

var app = express();
app.use(cors({origin:'http://localhost:4200',credentials:true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/user", user);
app.use("/Task",getUser,Task)
const start = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/TaskManager");
    app.listen(process.env.PORT || 4000, () =>
      console.log("Listening on port 4000")
    );
  } catch (error) {
    console.log(error);
  }
};

start();
