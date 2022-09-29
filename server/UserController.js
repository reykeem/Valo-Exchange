const User = require("./usersModel");

const UserController = {
  createUser(req, res) {
    User.create(req.body)
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.createUser`);
      });
  },
  getUser(req, res) {
    User.findOne({ username: req.params.username })
      .then((data) => {
        if (data === null) res.send(400);
        res.send(data);
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.getUser`);
      });
  },
  updateUser(req, res) {
    User.findOneAndUpdate(
      { username: req.params.username },
      req.body.username,
      {
        upsert: true,
      }
    )
      .then((data) => {
        res.status(200).send("Updated User");
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.updateUser`);
      });
  },
  deleteUser(req, res) {
    User.deleteOne({ username: req.params.username })
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.deleteUser`);
      });
  },
};

module.exports = UserController;
