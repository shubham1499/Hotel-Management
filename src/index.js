const express = require("express")
const path = require('path')
const bodyParser = require('body-parser')
require('./connection')
const User = require('./models/User')
const app = express();
const port = 3000;
const viewpath = path.join(__dirname,'')
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'v')))

app.set('view engine','ejs')
app.set('views',viewpath)

app.use(express.static(viewpath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    // res.redirect("/dashboard",{
    //     liattribute:JSON.stringify("liDashboard")
    // })
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
app.post("/addname", (req, res) => {
    myData = new User({
        name :req.body.firstName,
        salary : req.body.salary
    }) 
    myData.save().then(() => {
        res.redirect("/")
    }).catch((error) => {
        console.log('Error!',error)
        res.send("404")
    })
});




app.listen(port, () => {
 console.log("Server listening on port " + port);
});