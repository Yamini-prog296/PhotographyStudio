const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB Error:");
    console.error(err);
    console.error(err.message);
  });
  const bookingSchema = new mongoose.Schema({

    name: String,
    email: String,
    phone: String,
    date: String

});

const Booking = mongoose.model("Booking", bookingSchema);

app.post("/api/booking", async (req, res) => {

    try {

        const booking = new Booking(req.body);

        await booking.save();

        res.json({
            message: "🎉 Booking Saved Successfully!"
        });

    } catch (err) {

        res.status(500).json({
            message: "Failed to save booking"
        });

    }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});