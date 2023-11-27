const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  bookname: { type: String, reuired: true },
  description: { type: String, reuired: true },
  author: { type: String, reuired: true },
  image: { type: String, reuired: true },
  price: { type: String, reuired: true }
});
module.exports = new mongoose.model("Books", bookSchema);