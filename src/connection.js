  
// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise;
// // const MONGODB_URI = "mongodb+srv://siddharth-hotel:siddharth-hotel@cluster0.uye3i.gcp.mongodb.net/hotelmanagement?retryWrites=true&w=majority";

// mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}).then(() => {
//     console.log("MongoDB Connected…");
// }).catch(err => console.log(err))


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://siddharth-hotel:siddharth@cluster0.uye3i.gcp.mongodb.net/hotelmanagement?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology:true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
