exports.candidatValidator = (req, res, next) => {
  req
    .check("nom", "name will be requires")
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage("nom between 3 and 20 ");
  req.check("email").isEmail().withMessage("is email");
  req
    .check("prenom")
    .notEmpty()
    .isLength({ min: 3, max: 20 })
    .withMessage("prenom between 3 and 20 ");

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).send({
      error: errors[0].msg,
    });
  }
  next();
};
