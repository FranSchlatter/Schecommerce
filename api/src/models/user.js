const { DataTypes, UUIDV4 } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("El nombre no puede ser un numero")
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        customNameVal(value){
          if(!isNaN(value)) throw new Error("El email no puede ser un numero")
        }
      }
    }
  });
};