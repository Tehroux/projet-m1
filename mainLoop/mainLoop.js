const createUser = require('../user/user.js').createUser;
const removeUser = require('../user/user.js').removeUser;

exports.mainLoop = (db) => {
	removeUser(db, 'test');
};
