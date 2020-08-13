/* article mongoose model */
const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    img: String,
    userName: String,
    userProfileLink: String,
    commentTime: String,
    comment: String
})

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
    },
    content: {
        type: String,
        required: true,
        minlength: 1
    },
    img: {
        data: Buffer,
        contentType: String
    },
    likes:[mongoose.ObjectId],
    comments:[commentSchema]
});
const Article = mongoose.model('Article', articleSchema)

module.exports = { Article }