var createHash = require("hash-generator");
var hashLength = 12;

var Factory = require("../models/Factory");
var Medicine = require("../models/Medicine");
var _ = require("underscore");

const register = (req, res) => {
  var newFactory = new Factory(req.body);
  newFactory.email = req.profile;
  newFactory
    .save()
    .then(fac => {
      res.send("Factory is ", fac);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var factory = req.factory;
  factory = _.extend(factory, req.body);
  factory
    .save()
    .then(Fac => {
      res.send({ message: "Factory updated Successfully", factory: fac });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const FactoryById = (req, res, next, id) => {
  Factory.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.factory = user; // adds profile object in req with user info
    next();
  });
};

const medicine = (req, res) => {
  var newMedicine = new Medicine(req.body);
  var hash = createHash(hashLength);

  newMedicine.hashFac = hash;
  newMedicine.hashSupUp = hash;

  newMedicine.factory = req.factory;
  newMedicine
    .save()
    .then(med => {
      res.send(med);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  register,
  toactive,
  FactoryById,
  medicine
};
