const user = require("./../models/userSchema");
//Creating a new user
exports.create = async (req, res) => {
  if (!req.body.email && !req.body.name && !req.body.phone) {
    res.status(400).send({ message: "field should not be empty" });
  }

  const user = await user.create({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });

  res.status(201).json({
    status: "success",
    data: user,
  });
};

exports.getall = async (req, res) => {
  const users = await user.find();

  res.status(200).json({
    status: "success",
    length: users.length,
    data: users,
  });
};
