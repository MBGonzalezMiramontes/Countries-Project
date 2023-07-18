const api_db = require("./src/api_db");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(async () => {
    await api_db();
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
