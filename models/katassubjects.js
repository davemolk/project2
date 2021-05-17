'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class katasSubjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  katasSubjects.init({
    kataId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'katasSubjects',
  });
  return katasSubjects;
};