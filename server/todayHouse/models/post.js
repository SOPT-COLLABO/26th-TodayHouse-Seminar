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
        const query = `SELECT * FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            console.log(result)
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
        const query = `SELECT * FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            console.log(result)
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
        const query = `SELECT * FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            console.log(result)
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