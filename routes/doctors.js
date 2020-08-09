const log = console.log;
const express = require('express');
const doctorsAPI = express.Router();

// mongoose model
const { User } = require("../models/user");
const { ObjectID } = require("mongodb");

/** Doctor resource routes **/
// a POST route to add patient to the doctor
doctorsAPI.post("/:id", (req, res) => {
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
doctorsAPI.get("/", (req, res) => {
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
            res.status(500).send(error); // server error
        }
    );
});

// a GET route to get a doctor by their id.
// id is treated as a wildcard parameter, which is why there is a colon : beside it.
// (in this case, the database id, but you can make your own id system for your project)
doctorsAPI.get("/:id", (req, res) => {
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
                res.status(404).send(); // could not find this doctor
            } else {
                /// sometimes we wrap returned object in another object:
                //res.send({doctor})
                if (doctor.level !== 3){
                    res.status(404).send("Doctor not found");
                }else{
                    res.send(doctor);
                }
            }
        })
        .catch(error => {
            res.status(500).send(); // server error
        });
});

/// a DELETE route to remove a doctor by their id.
doctorsAPI.delete("/:id", (req, res) => {
    const id = req.params.id;

    // Validate id
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
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
            res.status(500).send(); // server error, could not delete.
        });
});

// a PATCH route for changing properties of a resource.
// (alternatively, a PUT is used more often for replacing entire resources).
doctorsAPI.patch("/:id", (req, res) => {
    const id = req.params.id;

    // get the updated name and year only from the request body.
    const { name, year } = req.body;
    const body = { name, year };

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
        return;
    }

    // Update the doctor by their id.
    User.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then(doctor => {
            if (!doctor) {
                res.status(404).send();
            } else {
                res.send(doctor);
            }
        })
        .catch(error => {
            res.status(400).send(); // bad request for changing the doctor.
        });
});

module.exports = doctorsAPI;