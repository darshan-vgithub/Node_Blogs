const router = require("express").Router();
const { signup } = require("../contollers/userController");
router.post("/signup", signup);
// router.get("/login",login)

module.exports = router;
