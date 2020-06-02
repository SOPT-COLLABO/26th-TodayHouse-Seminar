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
        const query = `SELECT * FROM ${table}`;
        try {
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            throw err;
        }
    },
}

module.exports = sell;
