const { Pool } = require("pg");
const dbName = "jet";
const connectionSettings = {
  user: "postgres",
  password: "home",
  host: "localhost",
  port: 5432,
  client_encoding: "UTF8",
};
const serverPool = new Pool(connectionSettings);

// Функція яка буде створювати базу даних та таблицю 
async function createDatabase() {
  const serverClient = await serverPool.connect();
  let dbClient;

  try {
    const checkDbQuery = `
      SELECT 1 
      FROM pg_catalog.pg_database 
      WHERE datname = '${dbName}'
    `;
    const { rowCount } = await serverClient.query(checkDbQuery);
    console.log(rowCount
    );
    if (rowCount === 0) {
      // `CREATE DATABASE $1`, [dbName] - чомусь так не хоче працювати
      await serverClient.query(`CREATE DATABASE ${dbName}`);

      const dbPool = new Pool({
        ...connectionSettings,
        database: dbName,
      });

      dbClient = await dbPool.connect();

      const createTableQuery = `
      CREATE TABLE IF NOT EXISTS person (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        position VARCHAR(255),
        moto TEXT
      )
    `;
      await dbClient.query(createTableQuery);

      console.log("Database created successfully!");
    } else {
      console.log("Database already exists.");
    }
  } catch (error) {
    console.error("Error creating or checking database:", error);
  } finally {
    serverClient.release();
    dbClient.release();
  }
}

module.exports = {
  query: (text, params) => {
    const pool = new Pool({
      ...connectionSettings,
      database: dbName,
    });

    return pool.query(text, params);
  },
  createDatabase: createDatabase,
};
