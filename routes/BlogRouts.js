const router = require("express").Router();
const { postBlog, getBlogs, getBlog, updateBlog, deleteBlog, getByAuthor, updateRatings} = require("../contollers/createBlogControllers");

const {auth,verifyRole} = require("../middlewares/authMiddleWare");

router.post("/",auth,verifyRole(["author","admin"]),postBlog)
router.get("/",auth,getBlogs)
router.get("/author",auth,getByAuthor)
router.get("/:id",auth,getBlog)
router.patch("/:id",auth, verifyRole(["author"]),updateBlog)
router.patch("/ratings/:id",auth,verifyRole(["user"]), updateRatings)
router.delete("/:id",auth, verifyRole(["author","admin"]), deleteBlog)

module.exports = router;
