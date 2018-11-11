let mongoose = require("mongoose");
//i want to code the definition of what a vehicle looks like
const schema = new mongoose.Schema({
  body: {
    required: true,
    type: String
  },
});

module.exports = mongoose.model("Comment", schema);