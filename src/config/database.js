require('dotenv/config')
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: 'backendVideo',
  define: {
      timestamps: true,
      underscored: true,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
