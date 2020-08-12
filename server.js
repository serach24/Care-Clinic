/* server.js for react-express-authentication */
"use strict";
const log = console.log;

const express = require("express");
//routes
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');
const doctorsRouter = require('./routes/doctors');
const loginRouter = require('./routes/login');
const patientsRouter = require('./routes/patients');
const feedRouter = require('./routes/feedback');
const sio = require("socket.io");
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
            expires: 60 * 1000,
            httpOnly: true
        }
    })
);

/*************************************************/
// Express server listening...
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    log(`Listening on port ${port}...`);
});

const io = sio.listen(server)

/** Chat using socket io */
let userList = []
io.on('connection', (socket) => {
    log(`socketID: ${socket.id} connected`);
    socket.on('on', (userInfo) => {
        log(`on: userId: ${userInfo.userId}, socketId: ${userInfo.socketId}`)
        userList.push(userInfo)
    })

    socket.on('sendMsg', (data) =>{
        log('sendmsg: '+ data);
        const message = data.message
        message.user = data.sendId
        const date = new Date()
        const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        message.time = time
        const receiverId = userList.filter(userInfo => userInfo.userId === data.talkTo)[0].socketId
        socket.broadcast.to(receiverId).emit('receiveMsg', message)
    })

    socket.on('disconnect', () => {
        log('quit')
        userList = userList.filter(item => (item.id !== socket.id))
    })

});

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
    if (req.session.user) {
        User.findById(req.session.userId).then((userId) => {
            log('auth' + userId)
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
app.use('/patients', patientsRouter);

app.use('/users', usersRouter);

app.use('/articles', articlesRouter);

app.use('/feed', feedRouter);



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

