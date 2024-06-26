import express from "express";
import newRouter from './Routes/Product.route.js'
import connectDB from "./lib/db.js";
import bodyParser from 'body-parser';
import cors from 'cors'
const app=express();
const PORT=5000;
const MONGODB_CONNECTION="mongodb+srv://arsath8597:123@cluster0.zzb60ap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors())
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

