var createHash = require("hash-generator");
var hashLength = 12;

var Distributor = require("../models/Distributor");
var _ = require("underscore");

const register = (req, res) => {
  var newDistributor = new Distributor(req.body);
  newDistributor.email = req.profile;
  newDistributor
    .save()
    .then(fac => {
      res.send("Distributor is ", fac);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var Distributor = req.Distributor;
  Distributor = _.extend(Distributor, req.body);
  Distributor.save()
    .then(Dis => {
      res.send({
        message: "Distributor updated Successfully",
        Distributor: Dis
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const DistributorById = (req, res, next, id) => {
  Distributor.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.distributor = user; // adds profile object in req with user info
    next();
  });
};

const medicine = (req, res) => {
  var medicine = req.medicine;

  var hash = createHash(hashLength);

  newMedicine.hashDisDown = hash;
  newMedicine.distributor = req.distributor;

  medicine = _.extend(medicine, req.body);
  medicine
    .save()
    .then(med => {
      res.send({ message: "Medicine updated Successfully", Medicine: med });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

module.exports = {
  register,
  toactive,
  DistributorById,
  medicine
};
