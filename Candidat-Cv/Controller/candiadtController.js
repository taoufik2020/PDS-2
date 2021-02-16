const Candidat = require("../models/Candidat");

exports.addCandidat = (req, res) => {
  const candidat = new Candidat(req.body);

  candidat
    .save()
    .then((candidat) => {
      res.status(200).json({
        candidat,
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: "bad request",
      });
    });
};
