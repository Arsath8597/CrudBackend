import express from "express";
import newRouter from './Routes/Product.route.js'
import connectDB from "./lib/db.js";
import bodyParser from 'body-parser';
import cors from 'cors'
const app=express();
const PORT=2717;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors({
    origin: 'http://localhost:3000' // Update this to match the domain you will make the request from
  }));
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

