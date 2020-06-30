const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
const moment = require('moment')
require('./connection')
const newEntry = require('./models/newEntry')
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
    res.render("views/dashboard",{
        liattribute:JSON.stringify("liDashboard")
    })
});
app.get("/notifications",(req,res)=>{
    res.render("views/notifications",{
        liattribute:JSON.stringify("liNotifications")
    })
});
app.get("/user",(req,res)=>{
    res.render("views/user",{
        liattribute:JSON.stringify("liUser")
    })
});
app.get("/map",(req,res)=>{
    res.render("views/map",{
        liattribute:JSON.stringify("liMap")
    })
});
app.get("/tables",(req,res)=>{
    res.render("views/tables",{
        liattribute:JSON.stringify("liTables")
    })
});
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
app.get("/dashboard",(req,res)=>{
    res.render("examples/dashboard")
});
app.post("/saveEntry",(req,res)=>{
    console.log(req.body);
    const objs = req.body.txtArrivalDate.split("/");
    const ad = objs[2] + "-" + objs[1] + "-" + objs[0];
    const data = req.body;
    myData = new newEntry({
        srNo : data.txtSrNo,
        firstName : data.txtFirstName,
        lastName : data.txtLastName,
        age : data.txtAge,
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
        flag : false,
    })
    myData.save().then(()=>{
        res.redirect("/user")
    }).catch((error)=>{
        console.log('Error!',error)
        res.send("404! Some Error occured")
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




app.listen(port, () => {
 console.log("Server listening on port " + port);
});