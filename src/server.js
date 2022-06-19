const app = require('./app');
//const settings = require('./config/settings');


app.listen(process.env.PORT || 3000, () => {
	console.log(`Test Server Is Ready ${process.env.PORT || 3000}`)
});


/*app.listen(settings.port, () => {
	console.log('Test Server Is Ready')
	console.log(`Application running in port : ${settings.port}`);
	
	
});*/
 

