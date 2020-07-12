var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var expressJwt = require("express-jwt");
var salt = bcrypt.genSaltSync(10);

const User = require("../models/User");

const signup = (req, res) => {
  var newUser = new User(req.body);
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
          if (!err) {
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                res.send("You successfully signup");
              })
              .catch(err => {
                res.send("Error is", err.message);
              });
          }
        });
      } else {
        res.send("This email id is already registered please login!");
      }
    })
    .catch(error => {
      console.log("Error is ", error.message);
    });
};

const signin = (req, res) => {
  var user = req.body;
  User.findOne({ email: user.email })
    .then(resuser => {
      if (!resuser) {
        res.send("Sorry this email id is not registered!");
      } else {
        bcrypt.compare(user.password, resuser.password, function(err, auth) {
          if (!err) {
            if (auth === true) {
              resuser.password = undefined;

              // generate a token with user id and secret
              const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

              // persist the token as 't' in cookie with expiry date
              res.cookie("t", token, { expire: new Date() + 9999 });

              // return response with user and token to frontend client
              const { _id, email } = resuser;
              return res.json({ token, user: { _id, email } });
            } else {
              res.send("Sorry your password is wrong");
            }
          }
        });
      }
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const requireSingin = expressJwt({
  // if the token is valid, express jwt appends the
  // verified users id in an auth key to the
  // request object
  secret: process.env.JWT_SECRET,
  userProperty: "auth"
});

const userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    user.password = undefined;
    req.profile = user; // adds profile object in req with user info
    next();
  });
};

module.exports = {
  signup,
  signin,
  requireSingin,
  userById
};
