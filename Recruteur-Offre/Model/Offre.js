const mongose = require("mongoose");
const { ObjectId } = mongose.Schema;
const offreSchema = new mongose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 32,
    },
    description: {
      type: String,
      maxlenght: 500,
    },
    dateExpiration: {
      type: Date,
      //require: true,
    },

    recruteur: {
      type: ObjectId,
      ref: "Recruteur",
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongose.model("Offre", offreSchema);
