const Offre = require("../Model/Offre");

exports.addOffre = (req, res) => {
  const offre = new Offre(req.body);

  offre
    .save()
    .then((offre) => {
      res.json({
        Offre: offre,
      });
    })
    .catch((error) => {
      res.json({
        error: error,
      });
    });
};
