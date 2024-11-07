const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const Video = require('../models/Video')
const Artigo = require('../models/Artigo')

const connection = new Sequelize(dbConfig)

Video.init(connection);
Artigo.init(connection)

module.exports = connection