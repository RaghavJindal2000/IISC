var mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

var CustomerSchema = mongoose.Schema({
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
  emgNo1: {
    type: Number,
    required: true
  },
  emgNo2: {
    type: Number
  },
  emgEmail1: {
    type: String,
    required: true
  },
  emgEmail2: {
    type: String
  },
  doctor: {
    type: ObjectId,
    ref: "Doctor"
  },
  emgergency: {
    type: Boolean,
    default: false
  },
  history: {
    type: Array
  }
});

module.exports = Customer = mongoose.model("Customer", CustomerSchema);
