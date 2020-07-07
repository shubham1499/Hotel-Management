const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const moment = require('moment')
require('./connection')
const Entry = require('./models/Entry')
const Customer = require('./models/Customer')
const app = express();
const port = 3000;
const viewpath = path.join(__dirname,'')
app.use(express.json())


app.set('view engine','ejs')
app.set('views',viewpath)

app.use(express.static(viewpath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.redirect("/dashboard");
});

app.get("/dashboard", (req, res) => {
    var query = Entry.find({flag:0});
    query.exec(function(error,ans){ 
        res.render("views/dashboard",{
            liattribute:JSON.stringify("liDashboard"),
            data:ans
        })
    })
});
app.post("/addDeparture",(req,res)=>{
    const data = req.body;
    const objsdd = data.txtDepartureDate.split("/");
    const dd = objsdd[2] + "-" + objsdd[1] + "-" + objsdd[0];
    
    Entry.findOneAndUpdate({srNo: req.body.txtSrNo},{$set: {departureDate: dd,departureTime:req.body.txtDepartureTime,flag:1}},function (err, doc) {
        if (err) {
            res.send("update document error");
        } else {
            res.redirect("/dashboard");        
        }
    });
});
app.get("/customerInfo/:id", (req, res) => {
    var query = Customer.findOne({Id:req.params.id});
    query.exec(function (err,ans) {
        console.log(ans);    
    })
    res.render("views/customerInfo",{
        liattribute:JSON.stringify("liUser")
    })
});
app.get("/notifications",(req,res)=>{
    res.render("views/notifications",{
        liattribute:JSON.stringify("liNotifications")
    })
});
app.get("/user",(req,res)=>{
    var query = Entry.find().sort({srNo:-1}).limit(1);
    query.exec(function (err,ans) {
        var newEntryId;
        if(ans.length==0){
            newEntryId = 2000;
        }else{
            newEntryId = ans[0].srNo+1;
        }
               
        res.render("views/user",{
            liattribute:JSON.stringify("liUser"),
            EntryId:(newEntryId)
        })  
    });
});

app.get("/tables",(req,res)=>{
    var data1=[]
    Customer.find({}, function(err, users) {
        users.forEach(function(user) {
            data1.push(user);
        })
        console.log(data1)
        res.render("views/tables",{
            liattribute:JSON.stringify("liTables"),
            data:(data1)
        })    
    });
});

app.post("/saveEntry",(req,res)=>{
    console.log(req.body);
    const data = req.body;
    const objsad = data.txtArrivalDate.split("/");
    const ad = objsad[2] + "-" + objsad[1] + "-" + objsad[0];
    
    
    const objsdob = data.txtDOB.split("/");
    const dob1 = objsdob[2] + "-" + objsdob[1] + "-" + objsdob[0];
    var query = Customer.find().sort({custId:-1}).limit(1);
    
    query.exec(function(err,ans){
        var newCustomerId;
        if(ans.length==0){
            newCustomerId=1000;
        }else{
            newCustomerId = (ans[0].custId+1);
        }
        
        myEntryData = new Entry({
            srNo : data.txtSrNo,
            custId: newCustomerId,
            firstName : data.txtFirstName,
            lastName : data.txtLastName,
            age : data.txtAge,
            sex : data.txtSex,
            mobileNo:data.txtMobileNo,
            dob : dob1,
            address : data.txtAddress,
            city : data.txtCity,
            state : data.txtState,
            country : data.txtCountry,
            postalCode : data.txtPostalCode,
            profession : data.txtProfession,
            noOfPersons : data.txtPersons,
            reasonForVisit : data.txtReason,
            arrivalDate : ad,
            arrivalTime : data.txtArrivalTime,
            departureDate : '',
            departureTime :'',
            destination : data.txtDestination,
            approxStay : data.txtStay,
            room : data.txtRoom,
            amount : data.txtAmount,
            flag : false,
        })
    
        myCustomerData = new Customer({
            custId : newCustomerId,
            firstName : data.txtFirstName,
            lastName : data.txtLastName,
            age : data.txtAge,
            sex : data.txtSex,
            mobileNo:data.txtMobileNo,
            address : data.txtAddress,
            dob : dob1,
            city : data.txtCity,
            state : data.txtState,
            country : data.txtCountry,
            postalCode : data.txtPostalCode,
            profession : data.txtProfession,
            visit : data.txtSrNo
        })
    
        myEntryData.save().then(()=>{
            myCustomerData.save().then(()=>{
                res.redirect("/user") 
            }).catch((error)=>{
                console.log('Error!',error)
                res.send("404! Some Error occured")
            })    
        }).catch((error)=>{
            console.log('Error!',error)
            res.send("404! Some Error occured")
        })
    })
});
// app.post("/addname", (req, res) => {
//     myData = new User({
//         name :req.body.firstName,
//         salary : req.body.salary
//     }) 
//     myData.save().then(() => {
//         res.redirect("/")
//     }).catch((error) => {
//         console.log('Error!',error)
//         res.send("404")
//     })
// });
app.get("/icons", (req, res) => {
    res.render("views/icons",{
        liattribute:JSON.stringify("liIcons")
    })
});
app.get("/typography", (req, res) => {
    res.render("views/typography",{
        liattribute:JSON.stringify("liTypography")
    })
});
app.get("/statistics",(req,res)=>{
    var userSalary = [];
    var userName   = []; 
    User.find({}, function(err, users) { 
        users.forEach(function(user) { 
            userSalary.push(user.salary);
            userName.push(user.name)
        });
        
        res.render("views/statistics",{
            liattribute:JSON.stringify("liStatistics"),
            labels1 : JSON.stringify(userName),
            values1 :JSON.stringify(userSalary)
        })
    }); 
});
app.get("/map",(req,res)=>{
    res.render("views/map",{
        liattribute:JSON.stringify("liMap")
    })
});


app.listen(port, () => {
 console.log("Server listening on port " + port);
});