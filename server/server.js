const express = require("express");
const path = require("path");
// const users = require("./routers/user");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("../client/dist"));

// app.get("/", (req, res) => {
//   console.log(path.join(__dirname, "../client/src/index.html"));
//   res.sendFile(path.join(__dirname, "../client/src/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
