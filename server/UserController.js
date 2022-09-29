const User = require("./usersModel");

const UserController = {
  createUser(req, res) {
    console.log("req.body:", req.body);
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
        res.json(data);
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
        res.status(200).json("Updated User");
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
  verifyUser(req, res) {
    User.findOne({ username: req.body.username })
      .then((data) => {
        if (data.password === req.body.password) {
          console.log("Logged In");
          res.json("Successful Log In");
        } else {
          console.log("Incorrect Username/Password");
          res.json("Incorrect Username/Password");
        }
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.verifyUser`);
      });
  },
};

module.exports = UserController;
