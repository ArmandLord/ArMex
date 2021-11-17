const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("player", {
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
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