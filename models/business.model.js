const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
const Business = new Schema(
  {
    person_name: {
      type: String,
      required: true
    },
    business_name: {
      type: String
    },
    business_gst_number: {
      type: Number,
      required: true
    }
  },
  {
    collection: "business"
  }
);

module.exports = mongoose.model("Business", Business);
