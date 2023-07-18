const {
  getCountriesController,
} = require("../../controllers/countriesContollers/countriesController");

const getCountriesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getCountriesController(name);
      return res.status(200).json(response);
    }
    const response = await getCountriesController();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCountriesHandler,
};
