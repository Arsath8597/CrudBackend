import express from "express";
import newRouter from './Routes/Product.route.js'
import connectDB from "./lib/db.js";
import bodyParser from 'body-parser';
import cors from 'cors'
const app=express();
const PORT=2717;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://crud-product-menagement.vercel.app/'); // Update to match the domain you will make the request from
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Allow requests from multiple origins
const allowedOrigins = [
  'https://crud-product-menagement.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
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

