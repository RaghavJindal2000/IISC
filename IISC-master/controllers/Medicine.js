var Medicine = require("../models/Medicine");

var MedicineById = (req, res, next, id) => {
  Medicine.findById(id).exec((err, med) => {
    if (err || !med) {
      res.status(404).json({
        error: "User not found"
      });
    }
    req.medicine = med; // adds profile object in req with user info
    next();
  });
};

var allMedicine = (req, res) => {
  Medicine.findAll()
    .then(medicines => {
      res.send(medicines);
    })
    .catch(err => {
      console.log("Error is ", err.message);
    });
};

var medicineValidate = (req, res) => {};

module.exports = {
  MedicineById,
  allMedicine,
  medicineValidate
};
