const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();
 app.use(cors());
 app.use(express.json());
 app.use("/api/users", userRoutes);
 app.use("/api/events",eventRoutes);


 mongoose.connect(process.env.MONGO_URL)
 .then(() => {
    console.log("MongoDB is connected");
 })
 .catch((error) => {
    console.log("MongoDB is not connected error:" , error);

 });

 app.get("/", (req, res) => {
    res.send("Event Managemnet & Ticket Booking Platform Server is ready");

 });

 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
 });