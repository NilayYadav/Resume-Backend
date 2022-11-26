const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

	name: {
		type: String, 
		required: true
	},

	username: {
		type: String,
		required: true,
		unique: [true, "username already exists!"]
	},

	email: {
		type: String, 
		required: true,
		unique: [true, "email already exists, please login!"],
	},

	password: {
		type: String,
		required: true
	},

	skills: [{ type: String }],

}, { timestamps: true})

const User = mongoose.model( 'User', UserSchema );

module.exports = { User };