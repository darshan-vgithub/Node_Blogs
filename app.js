const express = require("express");
const authRoutes = require("./routes/userRoutes");
const BlogRoutes = require("./routes/BlogRouts");
const globalEroorHadler = require("./contollers/globalEroorHadler");
const CustomError = require("./utils/CustomError");

const app = express();
app.use(express.json());
app.use("/app/v1/users", authRoutes);
app.use("/app/v1/blog", BlogRoutes);

app.all("*", (req, res, next) => {
  //   res.status(404).json({ status: "fail", message: "page not found" });
  //   let err = new Error("page is not found");
  //   err.statusCode = 404;
  //   err.status = "fail";
  //   next(err);

  let err = new CustomError(404, "page not found");
  next(err);
});
// global error handler
app.use(globalEroorHadler);

module.exports = app;
