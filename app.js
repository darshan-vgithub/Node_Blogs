const express = require("express");
const authRoutes = require("./routes/userRoutes");
const BlogRoutes = require("./routes/BlogRouts");

const app = express();
app.use(express.json());
app.use("/app/v1/users", authRoutes);
app.use("/app/v1/blog", BlogRoutes);

module.exports = app;
