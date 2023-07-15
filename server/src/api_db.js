// Verifica si la tabla "Country" está vacía en la base de datos.
// Si está vacía, realiza una llamada a la API para obtener información sobre los países
// y luego guarda esa información en la base de datos utilizando Sequelize.

const axios = require("axios");
const { Country } = require("./db.js");

const api_db = async () => {
  const countriesDb = await Country.findAll();
  if (countriesDb.length === 0) {
    const apiUrl = "http://localhost:5000/countries";
    const response = await axios.get(apiUrl);
    const apiCountries = response.data.map((country) => ({
      id: country.cca3,
      name: country.name.common,
      flagImage: country.flags.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "Dato no disponible.",
      subregion: country.subregion ? country.subregion : "Dato no disponible.",
      area: country.area,
      population: country.population,
    }));

    //Se utiliza bulkCreate para insertar múltiples registros en la base de datos.
    await Country.bulkCreate(apiCountries, {
      ignoreDuplicates: true,
    });
  }
};

module.exports = api_db;
