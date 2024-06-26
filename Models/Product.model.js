import { Schema, model } from "mongoose";

//write schema
const ProductSchema =new Schema({
    "title":String,
    "description":String,
    "price":Number,
    "image":String
})

const Product=model("Product",ProductSchema)

export default Product 

