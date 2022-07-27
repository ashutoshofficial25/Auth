const user = require("../models/userSchema");
const { bcrypt } = require("bcrypt");
exports.signup = async (req, res) => {
  //   const findUserByEmail = user.find({ email: req.body.email });
  //   if (findUserByEmail)
  //     return res.status(500).json({
  //       status: "error",
  //       msg: "User already exists with this email",
  //     });

  const newUser = user.create({
    email: req.body.email,
    name: req.body.name,
    password: req.body.email,
  });

  res.status(201).json({
    status: "success",
    data: newUser,
  });
};

exports.login = async (req, res) => {
  const findUser = await user.find({ email: req.body.email });
};
