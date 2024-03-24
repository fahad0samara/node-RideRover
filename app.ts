const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
import mongoose from "mongoose";
import BikeRoutes from './routes/BikeRoutes';

// MongoDB connection string with useNewUrlParser option included
//fahad0nodejs
require('dotenv').config();
const MONGODB_URI: string = process.env.MONGODB_URI ?? '';

if (!MONGODB_URI) {
  console.error('MongoDB URI is not defined');
  process.exit(1);
}
console.log('MongoDB URI:', MONGODB_URI);

mongoose
  .connect(MONGODB_URI, 
)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });




// Create Express server
const app = express(); 
const port = 8080; 


// Express configuration
app.use(cors()); 
app.use(helmet()); 
app.use(morgan("dev")); 
app.use(express.json());

// Start Express server
app.listen(port, () => {
  // Callback function when server is successfully started
  console.log(`Server started at http://localhost:${port}`);
});

app.get('/get-user-ip', (req: { ip: any; }, res: { json: (arg0: { userIP: any; }) => void; }) => {
  const userIP = req.ip

  console.log('User IP:', userIP);
  


  res.json({ userIP });
});

app.use('/products', BikeRoutes);

// hello world route
app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Hello, world!");
}
);


// import fs from 'fs';
// import path from 'path';
// import Bike from "./models/BikeModel";

// // Function to insert bikes into the database
// const insertBikes = async () => {
//   try {
//     // Read the JSON data from the file
//     const bikesData = fs.readFileSync(path.resolve(__dirname, 'bikes.json'), 'utf8');
//     const bikes = JSON.parse(bikesData);

//     // Iterate over the JSON data and insert each bike into the database
//     for (const bikeData of bikes) {
//       const bike = new Bike(bikeData);
//       await bike.save();
//       console.log(`Inserted bike: ${bike.name}`);
//     }

//     console.log('All bikes inserted successfully!');
//   } catch (error) {
//     console.error('Error inserting bikes:', error);
//   }
// };




// // Call the function to insert bikes into the database
// insertBikes();










// Export Express app
module.exports = app;
