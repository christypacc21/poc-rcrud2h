const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Business = new Schema(
  {
    personName: {
      type: String,
      required: true
    },
    businessName: {
      type: String
    },
    gstNum: {
      type: Number,
      required: true
    }
  },
  {
    collection: "business"
  }
);

module.exports = mongoose.model("Business", Business);
