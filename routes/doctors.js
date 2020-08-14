const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const { ObjectID } = require("mongodb");
const user = require('../models/user');

const code500 = 'Internal server error';
const code400 = 'Bad Request';
const code404 = 'Resource not found';
/** Doctor resource routes **/
// a POST route to add patient to the doctor
router.post("/:id", (req, res) => {
    // log(req.body)
	const id = req.params.id

	// Good practise: Validate id immediately.
	if (!ObjectID.isValid(id)) {
		res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}
	if (!ObjectID.isValid(req.body.patientId) || !req.body.appointmentTime){
		res.status(400).send(code400);
		return;
	}

	// check mongoose connection established.
	if (mongoose.connection.readyState != 1) {
		log('Issue with mongoose connection')
		res.status(500).send(code500)
		return;
	} 

	const fieldToPush = {};
	fieldToPush.patientId = req.body.patientId;
	fieldToPush.appointmentTime = req.body.appointmentTime;
	// If id valid, findById
	User.findByIdAndUpdate(id, {$push: {patients: fieldToPush }}, {new:true, useFindAndModify: false}).then((user) => {
		if (!user) {
			res.status(404).send(code404)  // could not find this student
		} else {
			/// sometimes we wrap returned object in another object:
			//add reservation to restaurant
			const patient = user.patients[user.patients.length - 1];
			// log(restaurant.id);
			const arrayToSend = {};
			arrayToSend.patient = patient;
			arrayToSend.user = user;
			res.send(arrayToSend);
		}
	})
	.catch((error) => {
		if (isMongoError(error)) { // check for if mongo server suddenly dissconnected before this request.
			res.status(500).send(code500)
		} else {
			log(error)
			res.status(400).send(code400) // bad request
		}
	})

});

// a GET route to get all valid doctors
router.get("/", (req, res) => {
    User.find().then(
        users => {
            let doctors = [];
            doctors = users.filter(user =>  user.level === 3)
            let fileToSend = doctors.map(doc => {
                const newDoc = {};
                newDoc.id= doc._id;
                newDoc.realName= doc.realName;
                newDoc.username= doc.username;
                newDoc.expertise= doc.expertise;
                newDoc.gender= doc.gender;
                newDoc.img= doc.img;
                return newDoc;
            })
            res.send({ doctors: fileToSend }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(code500); // server error
        }
    );
});

// a GET route to get all valid doctors
router.get("/doctorlst/:expertise", (req, res) => {
    const category = String(req.params.expertise);
    console.log(category)
    User.find({expertise: category}).then(
        users => {
            let doctors = [];
            doctors = users.filter(user =>  user.level === 3)
            let fileToSend = doctors.map(doc => {
                const newDoc = {};
                newDoc.id= doc._id;
                newDoc.realName= doc.realName;
                newDoc.username= doc.username;
                newDoc.expertise= doc.expertise;
                newDoc.gender= doc.gender;
                newDoc.img= doc.img;
                return newDoc;
            })
            res.send({ doctors: fileToSend }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(code500); // server error
        }
    );
});

// add expertise for doctor
router.post("/expertise/:id", (req, res) => {
    const docId = req.params.id;
    const expertise = req.body.expertise;
    // console.log(category)
    User.findByIdAndUpdate(docId, {$push: {expertise: expertise }}, {new:true, useFindAndModify: false}).then(
        user => {
            // let doctors = [];
            // doctors = users.filter(user =>  user.level === 3)
            // let fileToSend = doctors.map(doc => {
            //     console.log(typeof(doc.expertise))
            //     console.log(doc.expertise.includes(""))
            //     const newDoc = {};
            //     newDoc.id= doc._id;
            //     newDoc.realName= doc.realName;
            //     newDoc.username= doc.username;
            //     newDoc.expertise= doc.expertise;
            //     newDoc.gender= doc.gender;
            //     newDoc.img= doc.img;
            //     return newDoc;
            // })
            res.send({ doctor: user }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(code500); // server error
        }
    );
});

// a GET route to get a doctor by their id.
// id is treated as a wildcard parameter, which is why there is a colon : beside it.
// (in this case, the database id, but you can make your own id system for your project)
router.get("/:id", (req, res) => {
    /// req.params has the wildcard parameters in the url, in this case, id.
    // log(req.params.id)
    const id = req.params.id;

    // Good practise: Validate id immediately.
    if (!ObjectID.isValid(id)) {
        res.status(404).send(); // if invalid id, definitely can't find resource, 404.
        return;
    }

    // Otherwise, findById
    User.findById(id)
        .then(doctor => {
            if (!doctor) {
                res.status(404).send(code404); // could not find this doctor
            } else {
                /// sometimes we wrap returned object in another object:
                //res.send({doctor})
                if (doctor.level !== 3){
                    res.status(404).send(code404);
                }else{
                    res.send(doctor);
                }
            }
        })
        .catch(error => {
            res.status(500).send(code500); // server error
        });
});

/// a DELETE route to remove a doctor by their id.
router.delete("/:id", (req, res) => {
    const id = req.params.id;

    // Validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send(code404);
        return;
    }

    // Delete a doctor by their id
    User.findByIdAndRemove(id)
        .then(doctor => {
            if (!doctor) {
                res.status(404).send();
            } else {
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(500).send(code500); // server error, could not delete.
        });
});

// a PATCH route for changing properties of a resource.
// (alternatively, a PUT is used more often for replacing entire resources).
router.patch("/:id", (req, res) => {
    const id = req.params.id;

    // get the updated name and year only from the request body.
    const { name, year } = req.body;
    const body = { name, year };

    if (!ObjectID.isValid(id)) {
        res.status(404).send(code404);
        return;
    }

    // Update the doctor by their id.
    User.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(doctor => {
            if (!doctor) {
                res.status(404).send(code404);
            } else {
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(400).send(code400); // bad request for changing the doctor.
        });
});

router.post("/", (req, res) => {
    const id = req.body.to;
    log(id+" start adding appointment")
	if (!ObjectID.isValid(id)) {
        log(id+" not vaild")
		res.status(404).send()  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
	}

	// If id valid, findById
	User.findById(id).then((User) => {
		if (!User) {
            log(id+" not found in database")
			res.status(404).send('Resource not found')  // could not find this student
		} else {
			const newRev = {
				appointmentTime: req.body.time,
                patientId: req.body.from,
                realName: req.body.real,
                username: req.body.name,
			}
			User.patients.push(newRev);
			User.save();
			res.send(User);
		}
	})
		.catch((error) => {
			log(error)
			res.status(500).send('Internal Server Error')  // server error
		})

})

router.post("/appointment/get", (req, res) => {
    const id = req.body.id;

    if (!ObjectID.isValid(id)) {
		res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
		return;  // so that we don't run the rest of the handler.
    }
    User.findById(id)
    .then(doctor => {
        if (!doctor) {
            res.status(404).send(code404); // could not find this doctor
        } else {
            if (doctor.level !== 3){
                res.status(404).send(code404);
            }else{
                res.send({appos : doctor.patients});
            }
        }
    })
    .catch(error => {
        res.status(500).send(code500); // server error
    });
    });

    router.get("/appointment/change/:index/:id/:TFN", (req, res) => {
        const id = req.params.id;
        const index = req.params.index;
        const TFN = req.params.TFN;

        if (!ObjectID.isValid(id)) {
            res.status(404).send(code404)  // if invalid id, definitely can't find resource, 404.
            return;  // so that we don't run the rest of the handler.
        }
        User.findById(id)
        .then(doctor => {
            if (!doctor) {
                res.status(404).send(code404); // could not find this doctor
            } else {
                if (doctor.level !== 3){
                    res.status(404).send(code404);
                }else{
                    if(TFN === '0'){
                        //console.log(000000000000)
                        doctor.patients[index].status = true;
                    }
                    else if(TFN === '1'){
                        doctor.patients[index].status = false;
                    }
                    else{
                        doctor.patients[index].status = null;
                    }
                    doctor.save();
                    res.send({appos : doctor.patients});
                }
            }
        })
        .catch(error => {
            res.status(500).send(code500); // server error
        });
        });

module.exports = router;