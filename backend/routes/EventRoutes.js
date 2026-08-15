const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// POST /api/events - Create new event
router.post("/", async (req, res) => {
  try {
    const {
      title,
      category,
      date,
      location,
      price,
      availableTickets,
      totalTickets,
      description,
    } = req.body;

    const event = new Event({
      title,
      category,
      date,
      location,
      price,
      availableTickets: availableTickets || totalTickets,
      totalTickets: totalTickets || availableTickets,
      description,
      // Temporarily assigning dummy ID if auth middleware isn't attached yet
      organizer: req.user?._id || "60c72b2f9b1d8b0015b6d9a1",
    });

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/events - Get all events (Public listing)
router.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/events/my-events - Get events for current organizer
router.get("/my-events", async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;