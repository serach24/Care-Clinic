/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
// starting the express server
const app = express();

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { Doctor } = require("./models/doctor");
const { User } = require("./models/user");
const { Article } = require("./models/article");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
const article = require("./models/article");
app.use(bodyParser.urlencoded({ extended: true }));

/*** Session handling **************************************/
// Create a session cookie
app.use(
    session({
        secret: "oursecret",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60*1000,
            httpOnly: true
        }
    })
);

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
	if (req.session.user) {
		User.findById(req.session.userId).then((userId) => {
            log('auth'+ userId)
			if (!userId) {
				return Promise.reject()
			} else {
				req.userId = userId
				next()
			}
		}).catch((error) => {
			res.status(401).send("Unauthorized")
		})
	} else {
		res.status(401).send("Unauthorized")
	}
}

// A route to login and create a session
app.post("/users/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    log(username, password);
    // Use the static method on the User model to find a user
    // by their email and password
    User.findByNamePassword(username, password)
        .then(user => {
            // Add the user's id to the session cookie.
            // We can check later if this exists to ensure we are logged in.
            req.session.user = user._id;
            req.session.username = user.username;
            req.session.loginState = user.level;
            log('after:'+user._id);
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
app.get("/users/logout", (req, res) => {
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
app.get("/users/check-session", (req, res) => {
    if (req.session.user) {
        res.send({ userId: req.session.user,
                    loginState: req.session.loginState
        });
    } else {
        res.status(401).send();
    }
});

app.get("/users/get_profile", (req, res) => {
    if (req.session.user) {
        res.send(req.session.user);
    } else {
        res.status(401).send();
    }
});
/*********************************************************/

/*** API Routes below ************************************/
// NOTE: The JSON routes (/students) are not protected in this react server (no authentication required). 
//       You can (and should!) add this using similar middleware techniques we used in lecture.

/** Doctor resource routes **/
// a POST route to *create* a doctor
app.post("/students", (req, res) => {
    // log(req.body)

    // Create a new doctor using the Doctor mongoose model
    const doctor = new Doctor({
        name: req.body.name,
        year: req.body.year
    });

    // Save doctor to the database
    doctor.save().then(
        result => {
            res.send(result);
        },
        error => {
            res.status(400).send(error); // 400 for bad request
        }
    );
});

// a GET route to get all students
app.get("/students", (req, res) => {
    Doctor.find().then(
        students => {
            log();
            res.send({ students }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
});

/// a GET route to get a doctor by their id.
// id is treated as a wildcard parameter, which is why there is a colon : beside it.
// (in this case, the database id, but you can make your own id system for your project)
app.get("/students/:id", (req, res) => {
    /// req.params has the wildcard parameters in the url, in this case, id.
    // log(req.params.id)
    const id = req.params.id;

    // Good practise: Validate id immediately.
    if (!ObjectID.isValid(id)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }

    // Otherwise, findById
    Doctor.findById(id)
        .then(doctor => {
            if (!doctor) {
                res.status(404).send(); // could not find this doctor
            } else {
                /// sometimes we wrap returned object in another object:
                //res.send({doctor})
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
});

/// a DELETE route to remove a doctor by their id.
app.delete("/students/:id", (req, res) => {
    const id = req.params.id;

    // Validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    // Delete a doctor by their id
    Doctor.findByIdAndRemove(id)
        .then(doctor => {
            if (!doctor) {
                res.status(404).send();
            } else {
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error, could not delete.
        });
});

// a PATCH route for changing properties of a resource.
// (alternatively, a PUT is used more often for replacing entire resources).
app.patch("/students/:id", (req, res) => {
    const id = req.params.id;

    // get the updated name and year only from the request body.
    const { name, year } = req.body;
    const body = { name, year };

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    // Update the doctor by their id.
    Doctor.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(doctor => {
            if (!doctor) {
                res.status(404).send();
            } else {
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(400).send(); // bad request for changing the doctor.
        });
});

/** User routes below **/
// Set up a POST route to *create* a user of your web app (*not* a doctor).
app.post("/users", (req, res) => {
    log(req.body);

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        realName: req.body.realName,
        location: req.body.location,
        age: req.body.age,
        phone:req.body.phone,
        mainmail:req.body.mainmail,
        backupemail:req.body.mainmail
    });
    log(user);
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

/*** Article APIs below ***/
// body format { title:"", content:"", img:""}
// return article document
app.post("/articles", (req, res) =>{
    log(req.body);
        // Create a new doctor using the Doctor mongoose model
        const article = new Article({
            title: req.body.title,
            content: req.body.content,
            img: req.body.img
        });
    
        // Save doctor to the database
        article.save().then(
            result => {
                res.send(result);
            },
            error => {
                res.status(400).send(error); // 400 for bad request
            }
        );
})

//Get all articles
// return { articles:[ {article }, {article}, ...]}
app.get("/articles", (req,res) => {
    // log(req.body)
    Article.find().then(
        articles => {
            log();
            res.send({ articles }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
})
//get article by id
app.get("/articles/:id", (req, res) => {
    /// req.params has the wildcard parameters in the url, in this case, id.
    log(req.params.id)
    const id = req.params.id;

    // Good practise: Validate id immediately.
    if (!ObjectID.isValid(id)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }

    // Otherwise, findById
    Article.findById(id)
        .then(article => {
            if (!article) {
                res.status(404).send(); // could not find this article
            } else {
                res.send(article);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
});
//article delete 
//article update



/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/article/:id"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
