/* Doctor mongoose model */
const mongoose = require('mongoose')

const Doctor = mongoose.model('Doctor', {
	name: {
		type: String,
		required: true,
		minlegth: 1,
		trim: true
	},
	year: {
		type: Number,
		required: true,
		// default: 1
	}
})

module.exports = { Doctor }