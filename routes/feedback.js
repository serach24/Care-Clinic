const log = console.log;
const express = require('express');
const router = express.Router();

//mongoose model
const { feedback } = require("../models/feedback");

const code500 = 'Internal server error';
const code400 = 'Bad Request';
const code404 = 'Resource not found';

/*** Article APIs below ***/
// body format { title:"", content:"", img:""}
// return article document
router.post("/", (req, res) =>{
    // log(req.body);
        // Create a new doctor using the Doctor mongoose model
        const Feedback = new feedback({
            description: req.body.message,
            email: req.body.email
        });
    
        // Save doctor to the database
        Feedback.save().then(
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
    feedback.find().then(
        feedback => {
            // log(feedback);
            res.send({ feedback }); // can wrap in object if want to add more properties
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
    feedback.findById(id)
        .then(feedback => {
            if (!feedback) {
                res.status(404).send(); // could not find this article
            } else {
                res.send(feedback);
            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
});
//article delete 
//article update


module.exports = router;