import mongoose from "mongoose"; 
import sampleListing from "./init/data.js";
import Listing from "./models/listing.js";

const MONGO_URL = "mongodb://127.0.0.1:27017/homify";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected.");

    await initDB();

    console.log("Sample listings inserted successfully.");
    mongoose.connection.close(); // close after operation
  } catch (err) {
    console.error("Error initializing DB:", err);
  }
}

async function initDB() {
  // Optional: Clear DB before inserting new listings
  // await Listing.deleteMany({});

  const count = await Listing.countDocuments();
  if (count === 0) {
    const inserted = await Listing.insertMany(sampleListing);
    console.log(`Inserted ${inserted.length} listings.`);
  } else {
    console.log("Listings already exist. No action taken.");
  }
}

main();
