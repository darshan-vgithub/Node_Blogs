const Blog = require("../models/Blogs");
const asyncErrorHandler = require("../utils/asyncErrorHandler");

const postBlog = asyncErrorHandler(async (req, res) => {
  let user = req.user;
  const newBlog = await Blog.create({
    title: req.body.title,
    snippet: req.body.snippet,
    description: req.body.description,
    image: req.body.image,
    author: user._id,
  });
  res.status(201).json({
    status: "success",
    data: {
      newBlog,
    },
  });
});

const getBlogs = asyncErrorHandler(async (req, res) => {
  let search = req.query.search || "";
  let page = req.query.page * 1 || 1;
  let limit = req.query.limit * 1 || 3;
  let sort = req.query.sort || "ratings";
  let skip = (page - 1) * limit;

  sort && sort.split(",").join(" ");
  const blogs = await Blog.find({ title: { $regex: search, $options: "i" } })
    .skip(skip)
    .limit(limit)
    .sort(sort);
  let totalBlogs = await Blog.countDocuments();
  res.status(200).json({
    status: "success",
    page,
    limit,
    totalBlogs,
    data: {
      blogs,
    },
  });
});

const getByAuthor = asyncErrorHandler(async (req, res) => {
  let user = req.user;
  const blogs = await Blog.find({ author: user._id });
  res.status(201).json({
    status: "success",
    data: {
      blogs,
    },
  });
});

const getBlog = asyncErrorHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

const updateBlog = asyncErrorHandler(async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      updatedBlog,
    },
  });
});

const deleteBlog = asyncErrorHandler(async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

const updateRatings = asyncErrorHandler(async (req, res) => {
  const updateRatings = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      updateRatings,
    },
  });
});
module.exports = {
  postBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
  getByAuthor,
  updateRatings,
};
