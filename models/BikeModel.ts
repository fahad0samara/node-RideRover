import mongoose, { Schema, Document } from "mongoose";

// Define the bike schema
interface IBike extends Document {
  name: string;
  image: string;
  type: string;
  price: number;
  description: string;
  category: string; // Change the type to string
}

const bikeSchema: Schema<IBike> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String, // Change the type to string
      required: true, // Ensure that each bike has a category
    },
  },
  {
    timestamps: true,
  }
);

// Create the Bike model
const Bike = mongoose.model<IBike>("Bike", bikeSchema);

export default Bike;
