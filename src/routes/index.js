const { Router } = require("express");

const api = require("./api");
const html = require("./html");

const router = Router();

router.use("/api", api);
router.use("/", html);

module.exports = router;
