const mongoose = require('mongoose')
const { text } = require('body-parser')
const Entry = mongoose.model("Entry",{
    srNo:{
        type: Number
    },
    custId:{
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
        type:Array
    },
    amount:{
        type : Number
    },
    flag:{
        type:Number
    }
})
module.exports = Entry