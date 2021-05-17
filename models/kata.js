"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class kata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.kata.belongsTo(models.user);
      models.kata.belongsToMany(models.subject, { through: "katasSubjects" });
    }
  }
  kata.init(
    {
      name: DataTypes.STRING,
      URL: DataTypes.STRING,
      description: DataTypes.TEXT,
      comment: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "kata",
    }
  );
  return kata;
};
