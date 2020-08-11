const log = console.log;
const express = require('express');
const router = express.Router();

//mongoose model
const { Article } = require("../models/article");
const { ObjectID } = require("mongodb");

/*** Article APIs below ***/
// body format { title:"", content:"", img:""}
// return article document
router.post("/", (req, res) =>{
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
router.get("/", (req,res) => {
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
router.get("/:id", (req, res) => {
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


module.exports = router;