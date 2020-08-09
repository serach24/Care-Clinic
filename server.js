/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
//routes
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const doctorsRouter = require('./routes/doctors');
const loginRouter = require('./routes/login');
// starting the express server
const app = express();



// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set('useFindAndModify', false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");




// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
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

app.use('/users', loginRouter);

app.use('/doctors', doctorsRouter);
// log(doctorsRouter);

app.use('/users', usersRouter);

app.use('/articles', articlesRouter);


/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(__dirname + "/client/build"));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
    // check for page routes that we expect in the frontend to provide correct status code.
    const goodPageRoutes = ["/", "/login", "/article/:id", "/doctorlist"];
    if (!goodPageRoutes.includes(req.url)) {
        // if url not in expected page routes, set status to 404.
        res.status(404);
    }

    // send index.html
    res.sendFile(__dirname + "/client/build/index.html");
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
    log(`Listening on port ${port}...`);
});
