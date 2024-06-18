const {mongoose} = require('../config/dbConnection')


const Friends = mongoose.model('Friends', { name: String });

exports.Friends=Friends