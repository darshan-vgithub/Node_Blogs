const router = require("express").Router();
const { postBlog, getBlogs, getBlog, updateBlog, deleteBlog, getByAuthor, postRating, getRatings} = require("../contollers/createBlogControllers");

const {auth,verifyRole} = require("../middlewares/authMiddleWare");

router.post("/",auth,verifyRole(["author","admin"]),postBlog)
router.get("/",auth,getBlogs)
router.get("/author",auth,getByAuthor)
router.get("/:id",auth,getBlog)
router.patch("/:id",auth, verifyRole(["author"]),updateBlog)
router.post("/rating/:id",auth,verifyRole(["user"]), postRating)
router.get("/rating/:id",auth,verifyRole(["user","author","admin"]), getRatings)
router.delete("/:id",auth, verifyRole(["author","admin"]), deleteBlog)

module.exports = router;
