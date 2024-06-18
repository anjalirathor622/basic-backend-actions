const {check, validationResult} = require('express-validator');

const myValidator = ([
    check('firstname').not().isEmpty().withMessage('Name must have more than 3 characters'),
    check('lastname', 'Plese enter your lastname').not().isEmpty(),
    check('username', 'enter your username').not().isEmpty,
    check('email', 'Your email is not valid').isEmail().not().isEmpty(),
    check('password_hash', 'Your password must be at least 5 characters').isLength({min: '5'}).not().isEmpty().isInt(),
    check('role', 'enter your role').not().isEmpty(),
],
function (req, res,next) {
    const errors = validationResult(req);
    console.log(errors);

    if (!errors.isEmpty()) {
        res.send('validation failed');
    } else {
     
      next();
    }
  });

module.exports = { myValidator }