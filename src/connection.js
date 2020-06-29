const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/hotelmanagement",{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
})