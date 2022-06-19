const router = require('express').Router();

router.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to information nsfw',
		status: req.statusCode,
		path: req.path
	});
});

router.use('/pussy', require('./pussy'));

module.exports = router;
