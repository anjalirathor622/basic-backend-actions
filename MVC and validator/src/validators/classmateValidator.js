
//validation
const { check } = require('express-validator');

let classmateValidator = [
    check('name', 'First name is required').notEmpty().isAlpha().withMessage('please! enter a valid name'),
    check('surname','last name is required').notEmpty().isAlpha().withMessage('please! enter a valid surname'),
    check('adress').notEmpty().withMessage('please! enter a valid adress')
]

exports.classmateValidator = classmateValidator