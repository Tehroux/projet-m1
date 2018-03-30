const mongoose = require('mongoose');

const  userSchema = mongoose.Schema({
	username: String,
	password: String
});

const user = exports.userModel = mongoose.model('user', userSchema);

exports.createUser = (newUser, callback) => {
	newUser.save(callback);
};
