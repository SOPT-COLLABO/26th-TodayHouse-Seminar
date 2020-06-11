var express = require('express');
var router = express.Router();

const util = require('../modules/util')
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const BannerModel = require('../models/banner');


/* GET 배너이미지 리스트 불러오기 */
router.get('/', async (req, res) => {
  // 불러오기
  const banners = await BannerModel.getAllList();

  // 불러오기 성공
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.ALL_Banner_SUCCESS, banners));
});

module.exports = router;