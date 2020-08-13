const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");

router.get("/:sender", (req, res) => {
  const sender = req.params.sender;
  log(sender)
  User.findById(sender).then((user) =>{
    if (!user){
      res.status(404).send('user not exist')
    } else {
      const chatList = user.chatList.sort((a, b)=> (a.recentTime - b.recentTime));
      res.send(chatList)
    }
  }).catch(e => {
    log(e)
    res.status(500).send("Internal Server Error")
  })
})



router.get("/:sender:receiver", (req, res) => {
  const sender = req.params.sender;
  const receiver = req.params.receiver;
  
  User.findById(sender).then((user) =>{
    if (!user){
      res.status(404).send('user not exist')
    } else {
      const chatList = user.chatList
      const chatHistory = chatList.filter((ChatHistory) => (ChatHistory.receiver == receiver))[0]
      res.send(chatHistory)
    }
  }).catch(e => {
    log(e)
    res.status(500).send("Internal Server Error")
  })
})



module.exports = router;