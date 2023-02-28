import { Sequelize } from 'sequelize'

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD

// Database
const db = new Sequelize(
  database,
  username,
  password,
  {
    host: host,
    port: port,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
)

db.authenticate()
  .then(() => db.sync().catch(() => console.log("Cannot sync the database")))
  .catch((e) => console.log("Cannot connect to database, please check environment credentials",e))

export default db