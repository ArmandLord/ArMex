const { Router } = require("express");
const PlayerRoutes = require("./Player");
const router = Router();

router.use('/player', PlayerRoutes);


module.exports = router;