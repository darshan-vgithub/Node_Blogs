const router = require("express").Router();
const { postBlog } = require("../contollers/createBlogControllers");
const auth = require("../middlewares/authMiddleWare");

router.post("/",auth,postBlog)
// router.get("/",auth,getBlogs)
// router.get("/:id",auth,getBlog)
// router.patch("/:id",auth,updateBlog)
// router.delete("/:id",auth,deleteBlog)

module.exports = router;
