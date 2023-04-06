const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "cricketTeam.db");
const app = express();

let db = 0;
const initializeAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is running at http://localhost:/3000/");
    });
  } catch (e) {
    console.log(`dB error in ${e.message}`);
  }
};
initializeAndServer();

app.get("/players/", async (request, response) => {
  dbQuery = `
    SELECT * 
    FROM 
    cricket_team;`;
  const dbArray = await db.all(dbQuery);
  response.send( playersArray.map((eachPlayer) =>
      convertDbObjectToResponseObject(eachPlayer));
});
