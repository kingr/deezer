const express = require("express");
const path = require("path");
const searchApi = require("./api/search");
const artistApi = require("./api/artist");

const app = express();
const port = 3000;

require("./middleware")(app);

app.use("/api/search", searchApi);
app.use("/api/artist", artistApi);

app.use("/public", express.static("../dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "index.html"));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
