var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

var AmbulanceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: ObjectId,
    required: true,
    ref: "User"
  },
  phoneNo: {
    type: Number,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  },
  hospital: {
    type: ObjectId,
    // required: true,
    ref: "Hospital"
  },
  position: {
    type: String,
    required: true
  }
});

module.exports = Ambulance = mongoose.model("Ambulance", AmbulanceSchema);
