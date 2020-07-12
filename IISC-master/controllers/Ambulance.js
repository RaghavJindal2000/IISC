var Ambulance = require("../models/Ambulance");
var _ = require("underscore");

const register = (req, res) => {
  var newAmbulance = new Ambulance(req.body);
  newAmbulance.email = req.profile;
  newAmbulance
    .save()
    .then(ambulance => {
      res.send(ambulance);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const updatePosition = (req, res) => {
  var ambulance = req.ambulance;
  ambulance = _.extend(ambulance, req.body);
  ambulance
    .save()
    .then(user => {
      res.send({ message: "User updated Successfully", user: user });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const ambulanceById = (req, res, next, id) => {
  Ambulance.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.ambulance = user; // adds profile object in req with user info
    next();
  });
};

const getall = (req, res) => {
  Ambulance.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  register,
  getall,
  updatePosition,
  ambulanceById
};
