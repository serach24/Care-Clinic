const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const user = require('../models/user');


router.get("/", (req, res) => {
      User.find({"level":{$ne:2} }).then(
          users => {
              let usersToSend = [];
              usersToSend = users.map(user =>{
                const nUser = {};
                nUser.id= user._id;
                nUser.username= user.username;
                if (user.level === 1){
                    nUser.role= "Normal";
                }
                if (user.level === 2){
                    nUser.role= "Admin";
                }
                if (user.level === 3){
                    nUser.role= "Doctor";
                }
                nUser.recentIPAddress= "192.168.0.1";
                nUser.status = user.status;
                nUser.banTime= 0;
                return nUser;
              })
              res.send({ users: usersToSend }); // can wrap in object if want to add more properties
          },
          error => {
              res.status(500).send(error); // server error
          }
      );
});

router.patch("/", (req, res) => {
    const userId = req.body.id
    const status = req.body.status
    console.log(userId)
    User.findByIdAndUpdate(userId,{$set: {"status":status}} , {new:true, useFindAndModify: false}).then(
        user => {
            res.send(); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
});

module.exports = router;