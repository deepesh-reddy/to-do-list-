const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded(
    {
        extended:true
    }
));

app.use(express.static("public"));
var items=[];
let workitems = [];

app.get("/",function(req,res){
    var today = new Date();
    
    var options = 
    { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    day = today.toLocaleDateString("en-US", options);
    // console.log(today.toLocaleDateString("en-US", options));
    // var today = new Date('May 26, 2023 23:15:30');res.send(today.getDay().toString());
    // var currentDay=today.getDay();
    // var day="";

    // switch (currentDay) {
    //     case 0:
    //         day = "Sunday";
    //         break;
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day= "Tuesday";
    //         break;
    //     case 3:
    //         day= "Wednesday";
    //         break;
    //     case 4:
    //         day= "Thursday";
    //         break;
    //     case 5:
    //         day= "Friday";
    //         break;
    //     case 6:
    //         day= "Saturday";
    //         break;
    //     default:
    //         console.log("error : current day is equal to : " + currentDay);
    //         break;
    // }

    // if(currentDay == 6 ||currentDay==0)
    // {
    //     day=today.getDay().toString();
    //     res.sendFile(__dirname + "/weekend.html");
    // }
    // else
    // {
    //     day=today.getDay().toString();
    //     res.sendFile(__dirname + "/weekday.html");
    // }
    
    res.render("list" , {ListTitle : day, newListItems : items});
}); 

    app.post("/",function(req,res){
        var item= req.body.newItem;
        if(req.body.list === "work")
        {
            workitems.push(item);
            res.redirect("/work");
        }
        else
        {
            items.push(item);
            res.redirect("/");
        }
        console.log(req.body);
        
        // console.log(item);
        // items.push(item);
        // res.redirect("/");
    });

    app.get("/work",function(req,res){
        res.render("list",{ListTitle : "work list" , newListItems : workitems});
    });

    app.get("/about",function(req,res){
        res.render("about");
    });

app.listen(3000,function(){
    console.log("server started on port 3000");
});













// var today = new Date();
// console.log(today.toLocaleDateString ("en-US")); // 9/17/2016
 // Saturday, September 17
// console.log(today.toLocaleDateString("hi-IN", options)); // IECIR, 17 Fier 2016