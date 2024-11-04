import mongoose from "mongoose";


const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/escuelaDB");
    console.log("Connectado a MongoDB");
  } catch (error) {
    console.error("Error en la Conexion con mongoDB MongoDB", error);
  }
};

export default connectToDatabase;
