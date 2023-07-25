const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: {
          args: [3, 100],
          msg: "Debe contener entre 3 y 100 caracteres.",
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
      duration: {
        type: DataTypes.TIME,
        allowNull: true,
        validate: {
          is: /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/,
          setTime(time) {
            const minValue = "00:05";
            if (time < minValue) {
              throw new Error(`La duración mínima debe ser de ${minValue} hs.`);
            }
          },
        },
      },
      season: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
};
