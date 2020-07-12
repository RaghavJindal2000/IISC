var Hospital = require("../models/Hospital");
var _ = require("underscore");

const register = (req, res) => {
  var newHospital = new Hospital(req.body);
  newHospital.email = req.profile;
  newHospital
    .save()
    .then(hos => {
      res.send("Hospital is ", hos);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var Hospital = req.Hospital;
  Hospital = _.extend(Hospital, req.body);
  Hospital.save()
    .then(hos => {
      res.send({
        message: "Hospital updated Successfully",
        Hospital: hos
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const HospitalById = (req, res, next, id) => {
  Hospital.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.Hospital = user; // adds profile object in req with user info
    next();
  });
};

const getall = (req, res) => {
  Hospital.find()
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
  HospitalById,
  getall
};
