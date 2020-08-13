const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");

// // body-parser: middleware for parsing HTTP JSON body into a usable object
// const bodyParser = require("body-parser");
// router.use(bodyParser.json());

// // express-session for managing user sessions
// const session = require("express-session");
// router.use(bodyParser.urlencoded({ extended: true }));

// /*** Session handling **************************************/
// // Create a session cookie
// router.use(
//     session({
//         secret: "oursecret",
//         resave: false,
//         saveUninitialized: false,
//         cookie: {
//             expires: 60*1000,
//             httpOnly: true
//         }
//     })
// );

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

module.exports = router;