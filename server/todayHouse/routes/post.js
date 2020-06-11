var express = require('express');
var router = express.Router();

const util = require('../modules/util')
const statusCode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');
const PostModel = require('../models/post');


/* GET 포스트 리스트 불러오기 */
router.get('/', async (req, res) => {
  // 불러오기
  const posts = await PostModel.getAllList();

  // 불러오기 성공
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.ALL_POST_SUCCESS, posts));
});

/* GET 메인화면 인기사진 리스트 불러오기 */
router.get('/popular', async (req, res) => {
  // 불러오기
  const photos = await PostModel.getPhotoImgs();

  // 불러오기 성공
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.POPULAR_PHOTOS_SUCCESS, photos));
});


/* GET 메인화면 스토리 리스트 불러오기 */
router.get('/story', async (req, res) => {
  // 불러오기
  const stories = await PostModel.getStories();

  // 불러오기 성공
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.STORY_SUCCESS, stories));
});


/* postIdx에 맞는 detail 데이터 불러오기 */
router.get('/:postIdx', async (req, res) => {
  const postIdx = req.params.postIdx;
  const details = await PostModel.getDetails(postIdx);

  // 불러오기 성공
  return res.status(statusCode.OK)
    .send(util.success(statusCode.OK, resMessage.DETAIL_SUCCESS, details));
});

module.exports = router;