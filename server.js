const jsonServer = require("json-server");
const path = require("path");
const axios = require("axios");
const fs = require("fs");

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const GITHUB_REPO_URL =
  "https://raw.githubusercontent.com/pratikpawarnasik/mockData/main/db.json";

const fetchData = async () => {
  try {
    const response = await axios.get(GITHUB_REPO_URL);
    console.log("Fetched data:", response.data);

    let data = response.data;

    // Handle stringified JSON
    if (typeof data === "string") {
      try {
        data = JSON.parse(data);
      } catch (error) {
        console.error("Error parsing fetched string data:", error);
        return false;
      }
    }

    // Ensure the data is an object
    if (typeof data === "object" && !Array.isArray(data)) {
      fs.writeFileSync(
        path.join(__dirname, "db.json"),
        JSON.stringify(data, null, 2)
      );
      return true;
    } else {
      console.error("Fetched data is not an object:", typeof data);
      return false;
    }
  } catch (error) {
    console.error("Error fetching or parsing db.json from GitHub:", error);
    return false;
  }
};

const startServer = async () => {
  const dataFetched = await fetchData();
  if (dataFetched) {
    const router = jsonServer.router("db.json");
    server.use(middlewares);
    server.use(router);

    const PORT = process.env.PORT || 3001;
    server.listen(PORT, () => {
      console.log(`JSON Server is running on port ${PORT}`);
    });
  } else {
    console.error("Server not started due to data fetching error.");
  }
};

startServer();
