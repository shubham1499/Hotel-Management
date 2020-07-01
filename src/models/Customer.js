const mongoose = require('mongoose')
const Customer = mongoose.model('Customer',{
    custId : {
        type:Number
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    age:{
        type: Number
    },
    sex:{
        type: String
    },
    mobileNo:{
        type:Number
    },
    address:{
        type: String
    },
    city:{
        type: String
    },
    state:{
        type: String
    },
    country:{
        type: String
    },
    postalCode:{
        type: Number
    },
    profession:{
        type: String
    },
    visit:{
        type: [Number]
    }
})
module.exports = Customer