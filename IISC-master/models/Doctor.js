var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var DoctorSchema = mongoose.Schema({
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
  hospital: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Doctor = mongoose.model("Doctor", DoctorSchema);
