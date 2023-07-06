const getAllCountriesHandler = (req, res) => {
  const { name } = req.query;
  if (name) res.status(200).send(`pais ${name}`);
  else res.status(200).send("countries ok");
};

const getCountriesDetailsHandler = (req, res) => {
  const { id } = req.params;
  res.status(200).send(`pais ${id}`);
};

module.exports = {
  getAllCountriesHandler,
  getCountriesDetailsHandler,
};
