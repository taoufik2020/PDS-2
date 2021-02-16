const User = require("../models/user");
const jwt = require("jsonwebtoken");
//require('dotenv').config()

exports.getUser = (req, res) => {
  res.send("<h1 >hello les guard </h1>");
};
exports.singup = (req, res) => {
  console.log("body", req.body);
  const user = new User(req.body);
  user
    .save()
    .then((user) => res.status(200).send(user))
    .catch((error) => console.log(error.message));
};

exports.signin = (req, res) => {
  const { email, password } = req.body;
  console.log("object, ", email, password);
  User.findOne({ email: email })
    .then((user) => {
      console.log("object", user);
      if (!user) {
        return res.status(400).send("user not exixt");
      }
      if (!user.authenticatedUser(password)) {
        console.log("User.authenticatedUser(password)");
        return res.status(401).send("user et password non compatible");
      }

      const { _id, name, role } = user;

      const jwta = jwt.sign({ _id: _id, role }, process.env.JWT_SECRET);

      res.cookie("token", jwta, { expire: new Date() + 8585858585 });
      return res.send({
        jwta,
        user: { _id, name, role },
      });
    })
    .catch((error) => {
      return res.status(400).send({
        error: error,
      });
    });
};
exports.signOut = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "user signOut",
  });
};
