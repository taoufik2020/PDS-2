const mongoose = require("mongoose");
const candidatSchema = new mongoose.Schema({
  nom: {
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 3,
    required: true,
  },
  prenom: {
    type: String,
    trim: true,
    maxlength: 20,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Candidat", candidatSchema);
