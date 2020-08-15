const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const user = require('../models/user');

router.post("/", (req, res) => {
    log(req.body);
  
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
            log(error);
            res.status(400).send(error); // 400 for bad request
        }
    );
  });

// A route to login and create a session
router.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByNamePassword(username, password)
        .then(user => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username;
            req.session.loginState = user.level;
            // log('after:'+user._id);
            // log('after:'+user.username);
            // log('after:'+user.level);
            // log(req.session)
            // log(req.session.id)
            res.send({ userId: user._id,
                       loginState: user.level,
                       profile:user
            });
        })
        .catch(error => {
            res.status(400).send()
        });
});


// A route to logout a user
router.get("/logout", (req, res) => {
    // Remove the session
    req.session.destroy(error => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.send()
        }
    });
});

// A route to check if a use is logged in on the session cookie
router.get("/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ userId: req.session.user,
                    loginState: req.session.loginState
        });
    } else {
        res.status(401).send();
    }
});

router.post("/", (req, res) => {
      log(req.body);
    
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

module.exports = router;