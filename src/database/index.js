const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Video = require('../models/Video')

const connection = new Sequelize(dbConfig)

Video.init(connection);

module.exports = connection