const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
// console.log(date());
const app=express();
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req,res){
    let day=date.getDay();
    res.render("list",{listTitle: day,listings: items});
}) ; 
app.post("/",function(req,res){
    let item=req.body.newItem;
    if(req.body.list==="Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work List", listings:workItems});
});
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server started on 3000");
});












// const express=require("express");
// const bodyParser=require("body-parser");

// const app=express();
// app.set('view engine','ejs');

// app.get("/", function(req,res){
//     let today=new Date();
//     let currentDay=today.getDay();
//     // let day="";
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     if(currentDay===6 || currentDay===0){
//         // day="weekend";
//         // res.write("<h1>Yah it's the weekend</h1>");
//     }else{
//         // day="weekday";
//         // res.sendFile(__dirname+"/index.html");
//     }
//     // res.render("list",{kindOfDay: day});  
//     res.render("list",{kindOfDay: days[currentDay]});  
// });

// app.listen(3000,function(){
//     console.log("Server started on 3000")
// })