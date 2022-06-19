const router = require('express').Router();

router.get('/', (req, res) => {
	res.render("./src/view/home/");
});

// Api routes
router.use('/api/v1', require('./v1/index'));

module.exports = router;
