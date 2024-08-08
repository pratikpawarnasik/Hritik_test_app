const jsonServer = require("json-server");
const path = require("path");
const axios = require("axios");
const fs = require("fs");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const GITHUB_REPO_URL =
  "https://github.com/pratikpawarnasik/mockData/blob/ac377e7c168ba50fc9b6a89b75a4c3494e91a2cd/db.json";

// "https://raw.githubusercontent.com/<your-username>/<your-repo>/main/db.json";

// Fetch the db.json file from GitHub
axios
  .get(GITHUB_REPO_URL)
  .then((response) => {
    fs.writeFileSync(
      path.join(__dirname, "db.json"),
      JSON.stringify(response.data)
    );
  })
  .catch((error) => {
    console.error("Error fetching db.json from GitHub:", error);
  });

server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
