const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());


let mongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");


mongoose
  .connect("mongodb+srv://mydb:mydb@cluster0.custhyd.mongodb.net/")
  .then((client) => {
    // let collectionObj = client.db("mydb").collection("mycollection");
    // app.set("collectionObj", collectionObj);
    console.log("Database connected successfully...");
  })
  .catch((error) => {
    console.log("Error in connecting to mongodb", error);
  });

// import apis
const sampleApis = require("./apis/sample-apis");
const userApis = require("./apis/userApis");
const advancedUserApis = require("./apis/advancedUserApis");

// use apis
app.use("/sample-api", sampleApis);
app.use("/user-api", userApis);
app.use("/advanced-api", advancedUserApis);

app.use((err, req, res, next) => {
  res.send({ message: `Internal Server Error ${err}` });
  next();
});

app.use("*", (req, res) => {
  res.send({
    message: `${req.baseUrl} does not exist`,
  });
});

// attaching a port number to server with listen
const port = 4000;
app.listen(port, () => {
  console.log(`I am listening on port ${port}`);
});
