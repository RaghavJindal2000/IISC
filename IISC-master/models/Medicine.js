var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

var MedicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  barCode: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  Factory: {
    type: ObjectId,
    ref: "Factory"
  },
  Supplier: {
    type: ObjectId,
    ref: "Supplier"
  },
  Distributor: {
    type: ObjectId,
    ref: "Distributor"
  },
  facBash: { type: String },
  supBash: { type: String },
  disBash: { type: String },
  hashFac: { type: String, default: "0" },
  hashSupUp: { type: String },
  hashSupDown: { type: String },
  hashDisUp: { type: String },
  hashDisDown: { type: String },

  manDate: {
    type: Date,
    required: true,
    default: Date.now()
  },
  expiryDate: {
    type: Date,
    required: true
  }
});

module.exports = Medicine = mongoose.model("Medicine", MedicineSchema);
