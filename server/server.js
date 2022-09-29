const express = require("express");
const path = require("path");
// const users = require("./routers/user");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userController = require("./UserController");

const PORT = process.env.PORT || 3000;
const app = express();

mongoose.connect(
  "mongodb+srv://reykeem:Fuckdonaldtrump24@cluster0.ojinctn.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("Connected to Mongoose");
});

app.use(express.static("../client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

/* Sign Up Routes */

// Create a user
app.post("/signup", userController.createUser);
// Get a user data
app.get("/:username", userController.getUser);
// Put/patch info on a user
app.put("/:username", userController.updateUser);
// Delete a user
app.delete("/:username", userController.deleteUser);

/* Log In Routes */
app.post("/login", userController.verifyUser);

/**
 * 404 handler
 */
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
