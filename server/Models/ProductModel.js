let mongoose = require("mongoose");
//i want to code the definition of what a vehicle looks like
const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model("Product", schema);