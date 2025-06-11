import express from "express";
import mongoose from "mongoose";
import Listing from "./models/listing.js";
import path from "path";
import { fileURLToPath } from 'url';
import methodOverride from "method-override";
import ejsMate from "ejs-mate";
import sampleListing from "./init/data.js"
import wrapAsync from "./utilities/wrapAsync.js";
import ExpressError from "./utilities/expressError.js";
import listingSchema from "./schema.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/homify";

main().then(() => {
    console.log("DB connected");
    seedSampleListings(); // Seed when connected
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

 async function seedSampleListings() {
    const count = await Listing.countDocuments();
    if (count === 0) {
        await Listing.insertMany(sampleListing);
        console.log("Sample listings inserted.");
    }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

let validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error)} else {
            next()
        }};
    

// HOME ROUTE
app.get("/",wrapAsync( async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
}));

// INDEX: Show all listings
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
});

// FORM to add new listing
app.get("/listings/new", (req, res) => {
    res.render("listings/form.ejs", { listing: null });
});

// SHOW a single listing
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
}));

// CREATE a new listing from form
app.post("/listings", validateListing,wrapAsync( async (req, res, next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
}));

// EDIT listing form
app.get("/listings/:id/edit",wrapAsync( async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

// UPDATE a listing
app.put("/listings/:id",validateListing,wrapAsync( async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

// DELETE a listing
app.delete("/listings/:id",wrapAsync( async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));


//for any undefined route
app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
})

//middleware to send validation to user after creatig form 
app.use((err, req, res, next)=>{
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("listings/error.ejs", {err});
    // res.status(statusCode).send(message);
})

app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});