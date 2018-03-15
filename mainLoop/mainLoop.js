const createUser = require('../user/user.js').createUser;

exports.mainLoop = (db) => {
	createUser(db, 'test');
};
