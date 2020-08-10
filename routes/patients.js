const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const { ObjectID } = require("mongodb");

const code500 = 'Internal server error';
const code400 = 'Bad Request';
const code404 = 'Resource not found';

/** health history */
// recived "/history/:id" , body
//  { 
//     firstName: " Ken ",
//     lastName:" Cui ",
//     DOB: "1999-09-09",
//     maritalStatus: "Not married",
//     problems:[
//                 {year:"2020", reason:"Apple addiction", ukey: 100 }
//             ],
//     drugs:[
//             {name:"Apple", strength:"10", frequency:" Every day", ukey:200}
//             ],
//     allergies:[
//                 {drugName:"Banana", reaction:"Unkown", ukey:300}
//             ]
// }
// return status code

router.post('/:id', (req, res) =>{
    const id = req.params.id;
    if (!ObjectID.isValid(id)) {
		res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
    }
    // validate the req.body
    if (!req.body.firstName || !req.body.lastName) {
        res.status(400).send(code400);
        return;
    }

    log(req.body);
    User.findByIdAndUpdate(id, {$set: {"healthHistory": req.body}}, {new:true, useFindAndModify: false}).then((user) => {
        if(!user) {
            res.status(404).send(code404)
        } else {
            res.send(user.healthHistory);
        }
    }).catch((error) => {
        res.status(500).send(error)
    });
    
    



});


/**
 * 
 * 
 * 
 */
router.put('/:id', (req, res) =>{
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
		res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
    }

    const filedToSave = {};
    
    

});

//Get healthHistroy
router.get('/:id', (req,res) => {
    const id = req.params.id;
    log(id);

    if (!ObjectID.isValid(id)) {
		res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
    }

    User.findById(id).then((user) => {
        if (!user) {
            res.status(404).send(code404)
        }else{
            res.send(user.healthHistory)
        }
    }).catch(error =>{
        res.status(500).send(code500);
    })
})




module.exports = router;