import express from "express";
import newRouter from './Routes/Product.route.js'
import connectDB from "./lib/db.js";
import bodyParser from 'body-parser';
import cors from 'cors'
const app=express();
const PORT=2717;
app.use(cors({ 
    origin: ['http://localhost:3000'],
    methods:["POST","GET"],
    credentials:true

    
 },));
app.use(bodyParser.json())

app.use(express.json({ limit: "100mb" })); // Corrected middleware
app.use(express.urlencoded({ limit: "100mb", extended: true }));
 
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use('/api',newRouter)

connectDB();

app.listen(PORT ,()=>{
    console.log("Server Stated")
})

