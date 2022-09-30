const User = require("./usersModel");

const getKeyOfObj = (nestedObj) => {
  return JSON.parse(Object.keys(nestedObj)[0]);
};

const UserController = {
  createUser(req, res) {
    const body = getKeyOfObj(req.body);
    console.log("req.body:", body);
    User.create(body)
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
  verifyUser(req, res, next) {
    // console.log("req.body in verifyUser: ", req.body);
    const body = getKeyOfObj(req.body);
    console.log(body.username);
    User.findOne({ username: body.username })
      .then((data) => {
        console.log(data);
        if (data.password === body.password) {
          console.log("Logged In");
          //   res.json("Successful Log In");
          return next();
        } else {
          console.log("Incorrect Username/Password");
          //   res.json("Incorrect Username/Password");
          return next();
        }
      })
      .catch((err) => {
        console.log(`ERROR: ${err} in userController.verifyUser`);
      });
  },
};

module.exports = UserController;
