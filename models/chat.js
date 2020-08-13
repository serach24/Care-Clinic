/* article mongoose model */
const mongoose = require('mongoose')
const messageSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
    minlength: 1,
  },
  receiver: {
    type: String,
    required: true,
    minlength: 1,
  },
  time: {
    type: String,
    required: true,
    minlength: 1,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
  }
})

const chatHistorySchema = new mongoose.Schema({
  history: [messageSchema],
  recentMessage: String,
  recentTime: String,
  sender: {
    type: String,
    required: true,
    minlength: 1,
  },
  receiver: {
    type: String,
    required: true,
    minlength: 1,
  },
})


const ChatHistory = mongoose.model('Chat', chatHistorySchema)

module.exports = { chatHistorySchema }