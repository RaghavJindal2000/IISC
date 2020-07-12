var Doctor = require("../models/Doctor");
var _ = require("underscore");

const register = (req, res) => {
  var newDoctor = new Doctor(req.body);
  newDoctor.email = req.profile;
  newDoctor
    .save()
    .then(doc => {
      res.send("Doctor is ", doc);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var Doctor = req.Doctor;
  Doctor = _.extend(Doctor, req.body);
  Doctor.save()
    .then(Doc => {
      res.send({
        message: "Doctor updated Successfully",
        Doctor: Doc
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const DoctorById = (req, res, next, id) => {
  Doctor.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.Doctor = user; // adds profile object in req with user info
    next();
  });
};

const getall = (req, res) => {
  Doctor.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  register,
  toactive,
  DoctorById,
  getall
};
