const { Router } = require("express");

const router = Router();

const {
  createPlayers,
  createOnePlayer,
  updatePlayer,
  deletePlayer,
  getPlayers,
  getPlayerById,
  getTopTen,
} = require("../controllers/Player");

router.post("/", createPlayers);
router.post("/onePlayer", createOnePlayer);

router.put("/", updatePlayer);

router.delete("/", deletePlayer);

router.get("/", getPlayers);
router.get("/topTen", getTopTen);
router.get("/:id", getPlayerById);

module.exports = router;
