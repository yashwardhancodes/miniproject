 const { urlencoded } = require("body-parser");
const express=require("express");
 const app=express();
 const path=require("path");

app.use(express.urlencoded({ extended:true}));

 app.set("view engine","ejs");
 app.set("views",path.join(__dirname,"views"));

 app.set(express.static(path.join(__dirname,"public")));
 const port=8080;
 

 app.listen(port,()=>{
    console.log("listening to the port");
 });


 app.get("/",(req,res)=>{
    res.render("index.ejs");
 });

 