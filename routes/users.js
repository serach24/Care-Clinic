const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const user = require('../models/user');

const code500 = 'Internal server error';
const code400 = 'Bad Request';
const code404 = 'Resource not found';

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post("/", (req, res) => {
//   log(req.body);

  // Create a new user
  const user = new User({
      username: req.body.username,
      password: req.body.password,
	  level: req.body.level, 
      realName: req.body.realName,
      location: req.body.location,
      gender: req.body.gender,
      age: req.body.age,
      phone:req.body.phone,
      mainmail:req.body.mainmail,
      backupemail:req.body.mainmail,
      needVerify: req.body.needVerify,
      Certification1:req.body.Certification1,
      Certification2:req.body.Certification2
  });
//   log(user);
  // Save the user
  user.save().then(
      user => {
          res.send({
                  userId: user._id,
                  loginState: user.level,
                  profile:user
              });
      },
      error => {
        //   log(error);
          res.status(400).send(error); // 400 for bad request
      }
  );
});

// a GET route to get all users
router.get("/", (req, res) => {
//   console.log("here")
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
            nUser.status = "Active";
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

router.post("/changephoneEmail", (req, res) => {
    // Use the static method on the User model to find a user
    // by their email and password
    User.findById(req.body.userId)
        .then(user => {
            user.backupemail = req.body.email;
            user.phone = req.body.newphone;
            user.save();
            res.send(user)
        })
        .catch(error => {
            res.status(400).send()
        });
});

router.get("/get_profile/:id", (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            res.send(user)
        })
        .catch(error => {
            res.status(400).send()
        });
});

module.exports = router;