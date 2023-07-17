const {
  createActivityController,
  getActivitiesController,
} = require("../controllers/activitiesControllers");

const createActivityHandler = async (req, res) => {
  try {
    const { name, difficulty, duration, season, description } = req.body;
    const response = await createActivityController(
      name,
      difficulty,
      duration,
      season,
      description
    );
    res.status(201).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getActivitiesHandler = async (req, res) => {
  try {
    const { name } = req.query;
    if (name) {
      const response = await getActivitiesController(name);
      return res.status(200).json(response);
    };
    const response = await getActivitiesController();
    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({error: error.message });
  }
};

module.exports = { createActivityHandler, getActivitiesHandler };
