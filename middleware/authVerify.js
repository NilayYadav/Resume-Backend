const jwt = require('jsonwebtoken');

const mySecret = process.env['secret']

function authVerify(req, res, next){
	const token = req.headers.authorization;
	try{
		const decoded = jwt.verify(token, mySecret);
		req.user = { userId: decoded.userId };
		return next();
	}catch (error){
		res.status(401).json({message: "authorization not complete please add token!"});
	}	
}

module.exports = authVerify;
