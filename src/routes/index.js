const router = require('express').Router();

router.get('/', function(req, res)  {
	res.render('./src/views/home');
});

// Api routes
router.use('/api/v1', require('./v1/index'));

module.exports = router;
