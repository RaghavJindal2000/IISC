var createHash = require("hash-generator");
var hashLength = 12;

var Supplier = require("../models/Supplier");
var _ = require("underscore");

const register = (req, res) => {
  var newSupplier = new Supplier(req.body);
  newSupplier.email = req.profile;
  newSupplier
    .save()
    .then(fac => {
      res.send("Supplier is ", fac);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const toactive = (req, res) => {
  var Supplier = req.Supplier;
  Supplier = _.extend(Supplier, req.body);
  Supplier.save()
    .then(Sup => {
      res.send({
        message: "Supplier updated Successfully",
        Supplier: Sup
      });
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

const SupplierById = (req, res, next, id) => {
  Supplier.findById(id).exec((err, user) => {
    if (err || !user) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.supplier = user; // adds profile object in req with user info
    next();
  });
};

const medicine = (req, res) => {
  var medicine = req.medicine;

  var hash = createHash(hashLength);

  newMedicine.hashSupDown = hash;
  newMedicine.hashDisUp = hash;
  newMedicine.supplier = req.supplier;
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
  SupplierById,
  medicine
};
