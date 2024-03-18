let express = require("express");
let bcryptjs = require("bcryptjs");
let minApp = express.Router();
let expressAsyncHandler = require("express-async-handler");
let jwt = require("jsonwebtoken");
let verifyToken = require('./middlewares/verifyToken');
const User = require('../schema/user');

require("dotenv").config();

minApp.get(
  "/users", verifyToken,
  expressAsyncHandler(async (req, res) => {
    let collectionObj = req.app.get("collectionObj");
    let users = await collectionObj.find().toArray();
    res.send({
      message: users,
    });
  })
);

// authentication
minApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    let collectionObj = req.app.get("collectionObj");
    let userCredentials = req.body;
    let usernameExist = await collectionObj.findOne({
      name: userCredentials.name,
    });
    if (usernameExist) {
      let passwordMatched = await bcryptjs.compare(
        userCredentials.password,
        usernameExist.password
      );
      let token = jwt.sign({ name: userCredentials.name }, "abcd", {
        expiresIn: "1h",
      });
      if (passwordMatched) {
        res.send({
          message: "success",
          token,
        });
      }
    } else {
      res.send({
        message: "Fail",
      });
    }
  })
);

minApp.post(
  "/create-user",
  expressAsyncHandler(async (req, res) => {
    let collectionObj = req.app.get("collectionObj");
    let userCredentials = req.body;
    console.log("credentials are", userCredentials);
    let userExist = await User.findOne({ name: userCredentials.name }).exec();
    if (!userExist) {
      let hashedPassword = await bcryptjs.hash(
        userCredentials.password,
        +process.env.HASH_KEY_LENGTH
      );
      userCredentials.password = hashedPassword;
      let result = await User.create(userCredentials);
      res.send({
        message: "User successfully created...",
      });
    } else {
      res.send({
        message: "user already exist",
      });
    }
  })
);

module.exports = minApp;
