var mongoose = require("mongoose");
var { ObjectId } = mongoose.Schema;

var FactorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: ObjectId,
    ref: "User",
    required: true
  },
  autenticationNo: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = Factory = mongoose.model("Factory", FactorySchema);
