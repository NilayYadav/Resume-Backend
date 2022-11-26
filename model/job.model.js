const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({

	company: {
		type: String, 	
	},

	email: {
		type: String
	},

	requirements: [{
		type: String
	}],

	description: {
		type: String,
	},

}, { timestamps: true})

const Job = mongoose.model( 'Job', JobSchema );

module.exports = { Job };