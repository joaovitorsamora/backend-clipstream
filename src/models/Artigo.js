'use strict';
const { Model, DataTypes } = require('sequelize')
class Artigo extends Model {
  static init(sequelize) {
    super.init({
      title: DataTypes.STRING,
      url: DataTypes.STRING,
      description: DataTypes.TEXT,
      site: DataTypes.STRING,
      image: DataTypes.STRING,
      views: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    }, {
      sequelize,
      tableName: 'Artigos'
    })
  }

  // static async incrementViews(id) { 
  //   const artigo = await Artigo.findByPk(id);
  //   if (artigo) {
  //     artigo.views += 1;
  //     await artigo.save();
  //   }
  // }
}



module.exports = Artigo