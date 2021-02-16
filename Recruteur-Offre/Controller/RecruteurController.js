const Recruteur = require("../Model/Recruteur");

exports.addRecruteur = (req, res) => {
  const recruteur = new Recruteur(req.body);

  recruteur
    .save()
    .then((recruteur) => {
      res.json({
        Recruteur: recruteur,
      });
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};
