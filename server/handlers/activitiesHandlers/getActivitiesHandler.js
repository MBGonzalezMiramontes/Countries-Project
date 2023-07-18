const {
  getActivitiesController,
} = require("../../controllers/activitiesControllers/getActivitiesController");

const getActivitiesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getActivitiesController(name);
      return res.status(200).json(response);
    }
    const response = await getActivitiesController();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getActivitiesHandler };
