const mongoose = require('mongoose')
const { text } = require('body-parser')
const Entry = mongoose.model("Entry",{
    srNo:{
        type: Number
    },
    custId:{
        type: Number
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
    departureDate:{
        type: Date
    },
    departureTime:{
        type: String
    },
    destination:{
        type: String
    },
    approxStay:{
        type: Number
    },
    room:{
        type:[Number]
    },
    amount:{
        type : Number
    },
    flag:{
        type:Number
    }
})
module.exports = Entry