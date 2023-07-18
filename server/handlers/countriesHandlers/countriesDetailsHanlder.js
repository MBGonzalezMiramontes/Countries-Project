const {
  getCountryByIdController,
} = require("../../controllers/countriesContollers/countriesByIdContoller");

const getCountriesDetailsHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getCountryByIdController(id);
    if (response) {
      return res.status(200).json(response);
    }
    return res.status(404).json({ error: "País no encontrado" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountriesDetailsHandler,
};
