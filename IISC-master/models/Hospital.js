var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var HospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phoneNo: {
    type: Number,
    required: true
  },
  email: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  verificationNo: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Hospital = mongoose.model("Hospital", HospitalSchema);
