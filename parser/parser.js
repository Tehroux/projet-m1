const SEP = /:/
const AUTH_REQ = /^USER_ADD/;

exports.parser = (request) => {
	if( request.match(AUTH_REQ))
		console.log('> user auth');
};

function auth(request) {
	 
}
