const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const cvSchema = new mongoose.Schema({
  photo: {
    data: Buffer,
    contentType: String,
  },
  candidat: {
    type: ObjectId,
    ref: "Candidat",
    require: true,
  },
});

module.exports = mongoose.model("Cv", cvSchema);
