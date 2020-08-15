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
const chatRouter = require('./routes/chat');
const commentLike = require('./routes/comentLike');
const superusers = require('./routes/superusers');

//auth middleware
// const authenticate = require('./sAuth/patientAuth');

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
      expires: 15*60*1000,
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

  socket.on('sendMsg', (message) => {
    log(`sendMsg: text: ${message.text}, sender: ${message.sender}, receiver: ${message.receiver}`);

    const receiver = userList.filter(userInfo => userInfo.userId == message.receiver)
    if (receiver === undefined || receiver.length == 0) {
      socket.emit('chatTip', "He/She is not online yet and could not see your message");
      return;
    }
    // TODO verify if user has permission to talk to receiver

    // update time to server time
    const date = new Date()
    // const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    message.time = date
    
    socket.broadcast.to(receiver[0].socketId).emit('receiveMsg', message)
    log(`send to ${receiver[0].socketId}`);
  })

  socket.on('disconnect', () => {
    log(`socketId ${socket.id} quit`)
    userList = userList.filter(userInfo => (userInfo.socketId !== socket.id))
  })

});

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user).then((user) => {
      log('auth' + user)
      if (!user) {
        return Promise.reject()
      } else {
        req.user = user._id
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

app.use('/doctors', authenticate, doctorsRouter);
// log(doctorsRouter);
app.use('/patients',authenticate, patientsRouter);

app.use('/users',authenticate, usersRouter);

app.use('/superusers',authenticate, superusers);

app.use('/articles', articlesRouter);

app.use('/feed', feedRouter);

app.use('/chat',authenticate, chatRouter);

app.use('/comment', commentLike);

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

