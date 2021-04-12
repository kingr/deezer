const router = require("express").Router();
const controller = require("./artistController");

router.get("/:id/:artistName", controller.getArtistDetails);

module.exports = router;
