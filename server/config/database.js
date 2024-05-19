const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: '217.21.90.52', // Your database host
  user: 'u883623029_appuni', // Your database user
  password: 'u4mY8UakzI*', // Your database password
  database: 'u883623029_appuni', // Your database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool to be used in other parts of the application
module.exports = pool.promise(); // Use promise to support async/await
