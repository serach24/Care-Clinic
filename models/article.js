/* article mongoose model */
const mongoose = require('mongoose')
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
        contentType:String
    }
});
const Article = mongoose.model('Article', articleSchema)

module.exports = { Article }