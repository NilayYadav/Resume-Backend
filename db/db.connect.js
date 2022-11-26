const mongoose = require('mongoose');

async function initializeDBConnection(){
const mySecret = process.env['dbPassword']
	try{
		const uri = `mongodb+srv://dbSaurav:Jamesbond%40007@cluster0.iha7u.mongodb.net/resume-builder?retryWrites=true&w=majority`;

		await mongoose.connect(uri, { 
			useUnifiedTopology: true ,
			useNewUrlParser: true,
			// useFindAndModify: false
  	});
		console.log("Connection Completed");
	}catch(err){
		console.error("Failed to connect", err);
	}
	
}

module.exports = { initializeDBConnection }