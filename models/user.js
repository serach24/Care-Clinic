/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const chatHistorySchema = require('./chat')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const patientSchema = new mongoose.Schema({
	patientId: {
		type: mongoose.ObjectId,
		required: true
	},
	description: {
		type: String,
		default: ""
	},
	appointmentTime: {
		type: String,
		required: true
	},
	treatment: {
		type: String,
		default: ""
	},
	status: {
		type: Boolean,
		default: false
	},
	realName: {
		type: String,
		required: false,
		minlength: 1,
	},
	username: {
		type: String,
		required: false,
		minlength: 1,
	},
})

const problemSchema = new mongoose.Schema({
	year: {
		type: String,
		required: true
	},
	reason: {
		type: String,
		required: true
	}
})

const healthHistory = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	DOB: {
		type: String,
		required: true
	},
	maritalStatus: {
		type: String,
		required: true
	},
	problems: [problemSchema],
	drugs: [
		{
			name: String,
			strength: String,
			frequency: String
		}
	],
	allergies: [
		{
			drugName: String,
			reaction: String
		}
	]
})

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minlength: 1,
		trim: true,
		unique: true,
		// validate: {
		// 	validator: validator.isEmail,   // custom validator
		// 	message: 'Not valid email'
		// }
	},
	password: {
		type: String,
		required: true,
		minlength: 3
	},
	gender: {
		type: String,
		required: false,
		minlength: 1
	},
	level: {
		type: Number,
		require:true,
	},
	realName: {
		type: String,
		required: false,
		minlength: 1,
	},
	Certification1: {
		type: String,
		required: false,
		minlength: 1,
	},
	Certification2: {
		type: String,
		required: false,
		minlength: 1,
	},
	location: {
		type: String,
		required: false,
		minlength: 2
	},
	age: {
		type: Number,
		required: false,
		minlength: 2
	},
	mainmail: {
		type: String,
		required: false,
		minlength: 2
	},
	backupemail: {
		type: String,
		required: false,
		minlength: 2
	},
	phone: {
		type: Number,
		required: false,
		minlength: 2
	},
	needVerify: {
		type: Boolean,
		required: false,
	},
	img: {
		type: String,
		default: "https://i.postimg.cc/vBsL0kX0/1.jpg"
	},
	expertise: [String],
	patients: [patientSchema],
	healthHistory: healthHistory,
	chatList: [chatHistorySchema],
})

// An example of Mongoose middleware.
// This function will run immediately prior to saving the document
// in the database.
UserSchema.pre('save', function (next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// A static method on the document model.
// Allows us to find a User document by comparing the hashed password
//  to a given one, for example when logging in.
UserSchema.statics.findByNamePassword = function (username, password) {
	const User = this // binds this to the User model

	// First find the user by their email
	return User.findOne({ username: username }).then((user) => {
		console.log(user);
		if (!user) {
			return Promise.reject()  // a rejected promise
		}
		// if the user exists, make sure their password is correct
		return new Promise((resolve, reject) => {
			bcrypt.compare(password, user.password, (err, result) => {
				if (result) {
					resolve(user)
				} else {
					reject()
				}
			})
			// resolve(user)
		})
	})
}

// make a model using the User schema
const User = mongoose.model('User', UserSchema)
module.exports = { User }

