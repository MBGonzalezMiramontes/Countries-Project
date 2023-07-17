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
        validate: {
          isAlpha: true,
          len: {
            args: [3, 100],
            msg: "Debe contener entre 3 y 100 caracteres alfabéticos.",
          },
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
          //Valida si una cadena de texto tiene el formato HH:MM,
          //las horas en formato de 96 horas (de 00 a 96) y los minutos en formato de dos dígitos (de 00 a 59).
          is: /^([0-8]?[0-9]|9[0-6]):([0-5][0-9])$/,
          setTime(time) {
            const minValue = "00:05";
            const maxValue = "96:00";
            if (time < minValue || time > maxValue) {
              throw new Error(
                `La duración debe ser entre ${minValue} minutos y ${maxValue} horas.`
              );
            }
          },
        },
      },
      season: {
        type: DataTypes.ENUM("Verano", "Otoño", "Invierno", "Primavera"),
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
