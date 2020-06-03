const pool = require('../modules/pool');
const table = 'Sell';

const sell = {
    getList: async (id) => {
        const query = `SELECT * FROM ${table} WHERE sellIdx = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            let result2;
            for (res of result) {
                // img 가져오기
                result2 = await sell.getSellImages(res.sellIdx);
                res['imgs'] = result2;

                // review 가져오기
                result2 = await sell.getReviews(res.sellIdx);
                res['reviews'] = result2;
            }
            return result;
        } catch (err) {
            throw err;
        }
    },
    getAllList: async () => {
        const query = `SELECT * FROM Sell`;
        try {
            const result = await pool.queryParam(query);
            let result2;
            for (res of result) {
                // img 가져오기
                result2 = await sell.getSellImages(res.sellIdx);
                res['imgs'] = result2;

                // review 가져오기
                result2 = await sell.getReviews(res.sellIdx);
                res['reviews'] = result2;
            }
            return result;
        } catch (err) {
            throw err;
        }
    },
    getBanner: async () => {
        const cnt = await sell.getSellCount();
        randomNum = Math.floor(Math.random() * cnt + 1);
        console.log(randomNum);
        const query = `SELECT sellIdx, company, discount FROM ${table} WHERE sellIdx = "${randomNum}"`;
        try {
            const result = await pool.queryParam(query);
            console.log(result);
            let result2;
            for (res of result) {
                // img 가져오기
                console.log(res);
                result2 = await sell.getSellImages(res.sellIdx);
                res['imgUrl'] = result2[0].imgUrl;
            }
            return result;
        } catch (err) {
            throw err;
        }
    },
    getSellImages: async (sellIdx) => {
        const query = `SELECT imgUrl FROM SellImage WHERE Sell_sellIdx = ${sellIdx}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    },
    getReviews: async (sellIdx) => {
        const query = `SELECT imgUrl, profileImgUrl, name, createdAt, content 
        FROM ( SELECT imgUrl, createdAt, content, User_useridx FROM Review WHERE Sell_sellidx = ${sellIdx} ) AS R
        INNER JOIN User
        WHERE User.userIdx = R.User_useridx`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    },
    getSellCount: async () =>{
        const query = `SELECT COUNT(*) AS cnt FROM Sell`;
        try{
            const result = await pool.queryParam(query);
            return result[0].cnt;
        } catch (err){
            throw err;
        }
    }
}

module.exports = sell;
