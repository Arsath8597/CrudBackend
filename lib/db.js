import mongoose from "mongoose"
import dotenv from "dotenv"
const MONGODB_CONNECTION="mongodb+srv://arsath8597:123@cluster0.zzb60ap.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

dotenv.config()

const connectDB =async()=>{
  try {
    await mongoose.connect(MONGODB_CONNECTION)
    console.log('mongoDB Connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1);
  }
};
export default connectDB