const router = require("express").Router();
const { postBlog, getBlogs, getBlog, updateBlog, deleteBlog, getByAuthor} = require("../contollers/createBlogControllers");

const auth = require("../middlewares/authMiddleWare");

router.post("/",auth,postBlog)
router.get("/",auth,getBlogs)
router.get("/author",auth,getByAuthor)
router.get("/:id",auth,getBlog)
router.patch("/:id",auth,updateBlog)
router.delete("/:id",auth,deleteBlog)

module.exports = router;
