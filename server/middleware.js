const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");

module.exports = function (app) {
  app.disable("x-powered-by");
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
};
