/* User model */
'use strict';

const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

// Making a Mongoose model a little differently: a Mongoose Schema
// Allows us to add additional functionality.
const feedSchema = new mongoose.Schema({
	userId: {
		type: mongoose.ObjectId,
	},
	description: {
		type: String,
	},
	email: {
		type: String,
	},
	open: {
		type: Boolean,
		default: true
	}
})



// make a model using the User schema
const feedback = mongoose.model('feedback', feedSchema)
module.exports = { feedback }

