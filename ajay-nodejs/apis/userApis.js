let express = require("express");

let minApp = express.Router();
// read
minApp.get("/users", (req, res) => {
  let collectionObj = req.app.get("collectionObj");
  collectionObj
    .find()
    .toArray()
    .then((result) => {
      res.send({
        message: result,
      });
    })
    .catch((error) => {
      res.send({
        message: `Error in fetching data from given collection ${error}`,
      });
    });
});

minApp.get("/users/:name", (req, res) => {
  let name = req.params.name;
  let collectionObj = req.app.get("collectionObj");
  collectionObj
    .findOne({
      name: name,
    })
    .then((result) => {
      if (result) {
        res.send({
          message: result,
        });
      } else {
        res.send({
          message: `username with ${name} does not exist`,
        });
      }
    })
    .catch((error) => {
      res.send({
        message: `Error in finding with username ${name}`,
      });
    });
});

// create
// callback hell
// advanced promises
// async and await
minApp.post("/create-user", (req, res) => {
  let userData = req.body;
  let collectionObj = req.app.get("collectionObj");
  collectionObj
    .findOne({ name: userData.name })
    .then((result) => {
      if (!result) {
        collectionObj
          .insertOne(userData)
          .then((result) => {
            res.send({
              message: result,
            });
          })
          .catch((error) => {
            res.send({
              message: "Error in adding user",
            });
          });
      } else {
        res.send({
            message: "User already exist"
        })
      }
    })
    .catch((error) => {
      console.log("Error in creating user...");
    });
});

// insertMany --> homework

// updateOne 



// update
minApp.put("/update-user", (req, res) => {
    let userDetails = req.body;
    let collectionObj = req.app.get("collectionObj");
    collectionObj.updateOne({name: userDetails.name}, {
        $set: {
            phNo: userDetails.phNo
        }
    })
    .then((result) => {
        res.send({
            message: result
        })
    })
    .catch((error) => {
        res.send({
            message: `Error in updating data.. ${error}`
        })
    })
})


// deleteOne -- homework

// delete Many --> homeowrk

module.exports = minApp;
