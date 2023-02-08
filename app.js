import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
import path from "path";

const url=process.env.DATABASE_URL;
const app=express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use("/api/user",router)
app.use("/api/blog",blogRouter);

const port = process.env.PORT || 5000;

mongoose.connect(url,{useNewUrlParser:true})

const con=mongoose.connection

con.on('open',function(){
    console.log("connected successfuly");
})

app.listen(port,()=>{
    console.log(`server started on port ${port}`);
})

// app.use(express.static(path.join(__dirname,"../frontend/build")));

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"../frontend/build/index.html")),
//     function(err){
//         if(err){
//             res.status(500).send(err);
//         }
//     }
// })