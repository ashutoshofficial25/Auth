const UserModal = require("./../models/test");
//Creating a new user
exports.create = async (req, res) => {
  if (!req.body.email && !req.body.name && !req.body.phone) {
    res.status(400).send({ message: "field should not be empty" });
  }

  const user = await UserModal.create({
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
  res.status(200).json({
    status: "success",
    message: "it is not defined yet",
  });
};
