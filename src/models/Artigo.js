'use strict';
const { Model, DataTypes } = require('sequelize')
class Artigo extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.TEXT,
      site: DataTypes.STRING,
      image: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'Artigos'
    })
  }
}

module.exports = Artigo