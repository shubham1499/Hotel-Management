const mongoose = require('mongoose')
const User = mongoose.model('User',{
    name:{
        type: String
    },
    salary:{
        type: Number
    }
})
module.exports = User