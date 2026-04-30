const { Pool } = require('pg');
const pool = new Pool({ 
  connectionString: 'postgresql://moumitasaha@localhost/moumita_portfolio'
});
module.exports = pool;
