require('dotenv/config')
module.exports = {
  dialect: 'postgres',
  host: 'ep-restless-sound-a5nv3ilp.us-east-2.aws.neon.tech',
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
