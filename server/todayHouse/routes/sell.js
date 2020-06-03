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

router.get('/main', async (req, res) => {
  const sell = await SellModel.getBanner();
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.SELL_SUCCESS, sell));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const sell = await SellModel.getList(id);
  if (sell.length > 0) {
    return res.status(statusCode.OK)
      .send(util.success(statusCode.OK, resMessage.SELL_SUCCESS, sell));
  }
  return res.status(statusCode.NOT_FOUND)
    .send(util.fail(statusCode.NOT_FOUND, resMessage.SELL_FAIL));
});

module.exports = router;
