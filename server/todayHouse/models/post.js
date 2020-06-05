const pool = require('../modules/pool');
const postTable = 'Post';
const postImgTable = 'PostImage';
const userTable = 'User';
const detailTable = 'Detail';

/*
    # 기획단계에서의 보충 설명 필요부분
     * post에서 인기사진 리스트를 뽑아오려면 likes, 나 views 등의 변수와 로직 필요
     * 메인화면의 스토리 출력 로직이 없음
*/

const post = {
    // 포스트 리스트 불러오기
    getAllList: async () => {
        const query = `SELECT postIdx, name, profileImgUrl, location, content FROM ${postTable}
        INNER JOIN ${userTable} ON Post.User_userIdx = User.userIdx`;
        try {
            const result = await pool.queryParam(query);
            for (let element of result) {
                // 이미지 추가
                element['postImgs'] = await post.getPostImgs(element['postIdx'])
                // 상세가구 추가
                element['details'] = await post.getDetails(element['postIdx'])
            }
            return result

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getAll ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getAll ERROR : ', err);
            throw err;
        }
    },

    // 메인화면 인기사진 리스트 불러오기
    getPhotoImgs: async () => {
        const query = `SELECT imgUrl FROM ${postImgTable}`;
        try {
            const result = await pool.queryParam(query);
            return result

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }
    },

    // 메인화면 스토리 리스트 불러오기
    getStories: async () => {
        const query = `SELECT name, content, postIdx FROM ${postTable} INNER JOIN ${userTable} ON Post.User_userIdx = User.userIdx`;
        try {
            const result = await pool.queryParam(query);
            // 이미지 추가
            for (let element of result) {
                element['imgUrl'] = await post.mainPostImg(element['postIdx'])
            }
            return result

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }
    },

    // 메인화면 스토리 사진 불러오기
    mainPostImg: async (idx) => {
        const query = `SELECT imgUrl FROM ${postImgTable} WHERE Post_postIdx="${idx}"`;
        try {
            const result = await pool.queryParam(query);
            return result[0].imgUrl

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }
    },

    // 상세 가구 정보 불러오기
    getDetails: async (idx) => {
        const query = `SELECT imgUrl, company, price, Detail.content FROM ${postTable}
        INNER JOIN ${detailTable} ON Post.postIdx = Detail.Post_postIdx WHERE Post.postIdx = "${idx}"`;
        try {
            const result = await pool.queryParam(query);
            return result

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }
    },

    // 포스트 이미지 불러오기
    getPostImgs: async (idx) => {
        const query = `SELECT imgUrl FROM ${postImgTable} WHERE Post_postIdx="${idx}"`;
        try {
            const result = await pool.queryParam(query);
            return result

        } catch (err) {
            if (err.errno == 1062) {
                console.log('getPhotoImgs ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPhotoImgs ERROR : ', err);
            throw err;
        }
    }


}

module.exports = post;