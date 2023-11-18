const user = require("../models/User");
const signup = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  try {
    //verify if user is present already
    const exsistingUser = await user.findOne({ email: req.body.email });
    if (exsistingUser) {
      return res.status(400).json({
        status: "fail",
        message: "user exists already, try logging in",
      });
    }
    const newUser = await user.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

module.exports = { signup };
