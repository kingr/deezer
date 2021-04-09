const router = require("express").Router();
const controller = require("./searchController");

router.get("/", controller.getArtists, controller.getArtistFanCount);

module.exports = router;
