import Product from "../Models/Product.model.js";

export const CreateProduct = async (req, res) => {
    console.log("Request body:", req.body);
   

    const newProduct = new Product({
        title: req.body.title,
        description: req.body.description,  
        price: req.body.price,
        image:req.body.image
    });

    try {
        const product = await newProduct.save();
        return res.status(201).json(product);

    } catch (error) {

        return res.status(400).json({ message: error.message });
    }
};


export const getProduct=async(req,res)=>{
const data=await Product.find();
res.send({message:"all Data",data:data})

}

export const DeleteProduct = async (req, res) => {
    try {
      const { id } = req.params; // Correctly destructuring `id` from `req.params`
      const deleteItems = await Product.findByIdAndDelete(id);
  
      if (!deleteItems) {
        return res.status(404).json({ message: "Product not found" }); // Correct response for item not found
      }
  
      res.json({ message: "Item deleted successfully" }); // Successful deletion message
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" }); // Correct status code for server error
    }
  };


export const UpdateProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, price, image } = req.body;
      const updatedProduct = await Product.findByIdAndUpdate(id, { title, description, price, image }, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.json({ message: "Item updated successfully", data: updatedProduct });
    } catch (error) {
      res.status(500).send({ success: false, message: "Internal Server Error" });
    }
  };
  