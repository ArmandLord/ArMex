const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("player", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("oro", "plata", "bronce"),
      allowNull: false,
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(600),
      allowNull: false,
    }
  });
};