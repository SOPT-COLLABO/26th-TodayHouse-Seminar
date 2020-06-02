var express = require('express');
var router = express.Router();

router.use('/banner', require('./banner'));
router.use('/post', require('./post'));
router.use('/sell', require('./sell'));

module.exports = router;
