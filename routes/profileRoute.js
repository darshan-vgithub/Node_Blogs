const router = require("express").Router();
const auth = require("../middlewares/authMiddleWare");

router.get("/", auth, (req, res) => {
    let user=req.user;
  res.send(`welcome ${user.name}`);
});

module.exports = router;
