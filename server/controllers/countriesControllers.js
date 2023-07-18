const { Country, Activity } = require("../src/db");
const { Op } = require("sequelize");

// Este controlador busca países en la db según un nombre proporcionado.
const getCountriesController = async (name) => {
  //Si name tiene un valor, se realiza una búsqueda de coincidencias parciales en el campo name,
  //y si name no tiene un valor, se obtienen todas las actividades sin aplicar ninguna condición de búsqueda.
  const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : {};

  const countries = await Country.findAll({
    order: [["name", "ASC"]],
    where: condition,
    include: {
      model: Activity,
      attributes: ["name"],
    },
  });

  if (countries.length === 0) {
    throw new Error("No hay coincidencias.");
  }
  return countries;
};

//Este controlador se encarga de obtener los detalles de un país específico identificado por su ID, junto con las actividades asociadas.
const getCountryByIdController = async (id) => {
  if (id) {
    const countryDetail = await Country.findByPk(id, {
      include: {
        model: Activity,
        attributes: ["name"],
      },
    });
    return countryDetail;
  }
  throw new Error("No hay coincidencias.");
};

module.exports = {
  getCountriesController,
  getCountryByIdController,
};
