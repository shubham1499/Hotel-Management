const mongoose = require('mongoose')
const { text } = require('body-parser')
const NewEntry = mongoose.model("newEntry",{
    srNo:{
        type: Number
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
    noOfPersons:{
        type: Number
    },
    reasonForVisit:{
        type: String
    },
    arrivalDate:{
        type: Date
    },
    arrivalTime:{
        type: String
    },
    destination:{
        type: String
    },
    approxStay:{
        type: Number
    },
    room:{
        type:Array
    }
})
module.exports = NewEntry