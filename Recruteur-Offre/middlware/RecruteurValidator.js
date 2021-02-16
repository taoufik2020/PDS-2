exports.recruteurValidator = (req, res, next) => {
  req.check("name", "name will be requires").notEmpty();
  req.check("email").isEmail().withMessage("is email");
  req.check("prenom").notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).send(errors);
  }
  next();
};
