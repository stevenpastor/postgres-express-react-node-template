// Configure the database
const options = {
  query: (e) => {
    console.log(e.query)
  }
}

const pgp = require('pg-promise')(options);

const setDataBase = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV){
    return pgp({
      user: 'postgres',
      database: 'postgres-express-react-node-template',
      port: 5432,
      host: 'localhost'
    })
  }
  else if (process.env.NODE_ENV === 'production'){
    return pgp(process.env.DATABASE_URL)
  }
}

const db = setDataBase();

// Export the database
module.exports = db;
