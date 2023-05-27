const {Pool} = require('pg');
const pool = new Pool({
    user: 'postgres',
    password: 'home',
    host:"localhost",
    port:5432,
    database: 'jet',
    client_encoding: 'UTF8',

});
module.exports = {
    query: (text, params) => pool.query(text, params)
  };