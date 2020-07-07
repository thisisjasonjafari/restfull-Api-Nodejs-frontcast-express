const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    requierd: true,
  },
  price: {
    type: Number,
    requierd: true,
  },
});


module.exports = mongoose.model('Product',productSchema)