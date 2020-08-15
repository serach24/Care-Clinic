const log = console.log;
const express = require('express');
const router = express.Router();

// mongoose model
const { User } = require("../models/user");
const user = require('../models/user');
const { ObjectID } = require('mongodb');


router.get("/", (req, res) => {
      User.find({"level":{$ne:2} }).then(
          users => {
              let usersToSend = [];
              usersToSend = users.map(user =>{
                const nUser = {};
                nUser.id= user._id;
                nUser.username= user.username;
                if (user.level === 1){
                    nUser.role= "Normal";
                }
                if (user.level === 2){
                    nUser.role= "Admin";
                }
                if (user.level === 3){
                    nUser.role= "Doctor";
                }
                nUser.recentIPAddress= "192.168.0.1";
                nUser.status = user.status;
                nUser.banTime= 0;
                return nUser;
              })
              res.send({ users: usersToSend }); // can wrap in object if want to add more properties
          },
          error => {
              res.status(500).send(error); // server error
          }
      );
});

router.patch("/", (req, res) => {
    const userId = req.body.id
    const status = req.body.status
    console.log(userId)
    User.findByIdAndUpdate(userId,{$set: {"status":status}} , {new:true, useFindAndModify: false}).then(
        user => {
            res.send(); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(error); // server error
        }
    );
});

router.get("/pendingdoc/get", (req, res) => {
    User.find({"level":3}).then(
        users => {
            // let doctors = [];
            log('aaaa')
            // doctors = users.filter(user =>  user.level === 3)\
            var index = 0;
            let fileToSend = users.map(doc => {
                const newDoc = {};
                newDoc.id = index;
                index += 1;
                newDoc.trueId = doc._id;
                newDoc.realName= doc.realName;
                newDoc.username= doc.username;
                if(doc.expertise !== []){
                newDoc.expertise= doc.expertise[0];
                }
                newDoc.gender= doc.gender;
                newDoc.documents= [
                    {
                      docName: "Certification1",
                      location: doc.Certification1,
                    },
                    {
                      docName: "Certification2",
                      location: doc.Certification2,
                    }
                  ];
                if(doc.needVerify == true){
                    newDoc.status= "Pending";
                }
                else if(doc.needVerify == false){
                    newDoc.status = "Approved";
                }
                else if(doc.needVerify == null){
                    newDoc.status = "Declined";
                }
                
                return newDoc;
            })
            res.send({ doctors: fileToSend }); // can wrap in object if want to add more properties
        },
        error => {
            res.status(500).send(code500); // server error
        }
    );
});
router.get("/fish/change/:id/:TFN", (req, res) => {
    const id = new ObjectID(req.params.id);
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
                    doctor.needVerify = true;
                }
                else if(TFN === '1'){
                    doctor.needVerify = false;
                }
                else{
                    doctor.needVerify = null;
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