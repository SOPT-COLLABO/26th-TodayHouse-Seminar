var express = require('express');
var router = express.Router();

const util = require('../modules/util')
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const SellModel = require('../models/sell');

router.get('/', async (req, res) => {
  const sell = await SellModel.getAllList();

  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.SELL_SUCCESS, sell));
});


module.exports = router;
