const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncErrorhandler = require("../utils/asyncErrorHandler");
const CustomError = require("../utils/CustomError");
const auth = asyncErrorhandler(async (req, res, next) => {
  let testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    // return res.status(401).json({
    //   status: "fail",
    //   message: "Try logging in to access",
    // });
    const err = new CustomError(400, "Try logging in to access");
    next(err);
  }
  const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decodedToken.id);
  if (!user) {
    // return res.status(401).json({
    //   status: "fail",
    //   message: "user no longer exists",
    // });
    const err = new CustomError(400, "user no longer exists");
    next(err);
  }
  req.user = user;
  next();
});

const verifyRole = (role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      // return res.status(400).json({
      //   status: "fail",
      //   message: "you are not authorized",
      // });

      const err = new CustomError(400, "you are not authorized");
      next(err);
    }
    next();
  };
};

module.exports = { auth, verifyRole };
