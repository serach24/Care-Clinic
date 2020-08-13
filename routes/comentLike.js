const log = console.log;
const express = require('express');
const router = express.Router();

const code500 = 'Internal server error';
const code400 = 'Bad Request';
const code404 = 'Resource not found';
//mongoose model
const { Article } = require("../models/article");
const { ObjectID } = require("mongodb");

//add likes
router.post('/like', (req, res) => {
    const id = req.body.articleId;
    const userId = req.body.userId;
    log(userId)
    if (!ObjectID.isValid(id) || !ObjectID.isValid(userId)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }

	Article.findByIdAndUpdate(id, {$push: {likes: userId }}, {new:true, useFindAndModify: false}).then((likes) => {
		if (!likes) {
			res.status(404).send(code404)  // could not find this student
		} else {
			res.send(likes);
		}
	})
	.catch((error) => {
			log(error)
			res.status(400).send(code400) // bad request
	})

});

router.delete('/like', (req, res) => {
    const id = req.body.articleId;
    const userId = req.body.userId;
    log(userId)
    if (!ObjectID.isValid(id) || !ObjectID.isValid(userId)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }
	Article.findByIdAndUpdate(id, {$pull: {likes: userId }}, {new:true, useFindAndModify: false}).then((likes) => {
		if (!likes) {
			res.status(404).send(code404)  // could not find this student
		} else {
			res.send(likes);
		}
	})
	.catch((error) => {
			log(error)
			res.status(400).send(code400) // bad request

	})

});

//add comment
// router.post('/addRely', (req, res) => {
//     const id = req.body.articleId;
//     const comment = req.body.comment;
//     log(comment)
//     if (!ObjectID.isValid(id)) {
//         res.status(404).send(); // if invalid id, definitely can't find resource, 404.
//         return;
//     }
//     fieldToPush ={};
//     fieldToPush.img = comment.img;
//     fieldToPush.userName = comment.userName
//     fieldToPush.userProfileLink = 
// 	Article.findByIdAndUpdate(id, {$push: {likes: comment }}, {new:true, useFindAndModify: false}).then((likes) => {
// 		if (!likes) {
// 			res.status(404).send(code404)  // could not find this student
// 		} else {
// 			res.send(likes);
// 		}
// 	})
// 	.catch((error) => {
// 			log(error)
// 			res.status(400).send(code400) // bad request
// 	})

// });


module.exports = router;