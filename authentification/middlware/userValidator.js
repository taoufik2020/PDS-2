exports.userSignValidator = (req,res,next) => {


    req.check('name','name will be requires').notEmpty();
    req.check('email').isEmail().withMessage('is email');
    req.check('password').notEmpty().isLength({min:4,max:10})
    .withMessage('password between 4 and 6 ')

    const errors = req.validationErrors()
  
   if(errors) {
       return res.status(400).send(errors)
   }
    next()
}