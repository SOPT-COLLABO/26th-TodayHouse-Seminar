const pool = require('../modules/pool');
const table = 'Sell';

const sell = {
    getList: async (id) => {
        const query = `SELECT * FROM ${table} WHERE sellIdx = "${id}"`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }

    },
    getAllList: async () => {
        let query = `SELECT * FROM Sell`;
        try {
            const result = await pool.queryParam(query);
            let result2;
            for (res of result) {
                // img 가져오기
                query = `SELECT imgUrl FROM SellImage WHERE Sell_sellIdx = ${res.sellIdx}`;
                result2 = await pool.queryParam(query);
                res['imgs'] = result2;

                // review 가져오기
                query = `SELECT imgUrl, profileImgUrl, name, createdAt, content 
                FROM ( SELECT imgUrl, createdAt, content, User_useridx FROM Review WHERE Sell_sellidx = ${res.sellIdx} ) AS R
                INNER JOIN User
                WHERE User.userIdx = R.User_useridx`;
                result2 = await pool.queryParam(query);
                res['reviews'] = result2;
            }

            return result;
        } catch (err) {
            throw err;
        }
    },
}

module.exports = sell;
