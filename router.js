const router = require('express').Router();


const moviesRouter = require("./routes/moviesRouter");
// const seriesRouter = require("./routes/seriesRouter");

router.use("/movies", moviesRouter);
// router.use("/series", seriesRouter);

module.exports = router;