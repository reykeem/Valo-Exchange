const CookieController = {
  // method to set cookie with ran number
  setCookie(req, res, next) {
    console.log("setting cookie");
    res.cookie("LOGGEDIN", "testcookie");
    return next();
  },
};

module.exports = CookieController;
