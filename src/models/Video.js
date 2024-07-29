'use strict';
const { Model, DataTypes } = require('sequelize')
class Video extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.TEXT,
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },
      comments: {
        type: DataTypes.JSONB,
        defaultValue: []
      }
    }, {
      sequelize,
      tableName: 'Videos'
    })
  }
}

module.exports = Video