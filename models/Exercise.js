const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Exercise extends Model {}

Exercise.init(
  {
    Exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    muscle_group: {
      type: DataTypes.STRING,
    },
    equipment: {
      type: DataTypes.STRING,
    },
    Template_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Template",
        key: "id",
      },
    },
    Routine_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Routine",
        key: "id",
      },
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "Exercise",
  }
);

module.exports = Exercise;
