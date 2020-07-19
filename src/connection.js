  
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb+srv://siddharth-hotel:siddharth-hotel@cluster0.uye3i.gcp.mongodb.net/hotelmanagement?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Connected…");
}).catch(err => console.log(err))