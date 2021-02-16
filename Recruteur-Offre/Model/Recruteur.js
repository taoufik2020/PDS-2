const mongose = require("mongoose");

const RecruteurSchema = new mongose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    prenom: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    email: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    Nom_Entreprise: {
      type: String,
      trim: true,
      maxlength: 32,
    },
  },
  { timestamps: true }
);

module.exports = mongose.model("Recruteur", RecruteurSchema);
