const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password: '22822333',
    host:'localhost',
    port:'5432',
    database:'electrofication'
})

module.exports = pool