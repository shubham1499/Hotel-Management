  
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb+srv://siddharth-hotel:siddharth@cluster0.uye3i.gcp.mongodb.net/hotelmanagement?retryWrites=true&w=majority" || "mongodb://localhost:27017/hotelmanagement";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true,useUnifiedTopology:true}).then(() => {
    console.log("MongoDB Connected…");
}).catch(err => console.log(err))


// const MongoClient = require('mongodb').MongoClient;
// const uri ="mongodb+srv://siddharth-hotel:siddharth@cluster0.uye3i.gcp.mongodb.net/hotelmanagement?retryWrites=true&w=majority" || "mongodb://localhost:27017/hotelmanagement"
// const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology:true });
// client.connect(err => {
//     if(err){
//         console.log("errr",err);
//     }else{
//         console.log("connected to mongodb",err);
//     }
//     const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
// //   client.close();
// });
