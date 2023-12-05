const router = require("express").Router();
const { signup, login } = require("../contollers/AdminController");

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
