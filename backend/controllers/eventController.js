const Event = require("../models/Event");

const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);

        res.status(201).json({
            message: "Event created successfully",
            event
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating event",
            error: error.message
        });
    }
};
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        res.json(events);
    } catch (error) {
        res.status(500).json({
            message: "Error getting events",
            error: error.message
        });
    }
};

const getEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        res.json(event);
    } catch (error) {
        res.status(500).json({
            message: "Error getting event",
            error: error.message
        });
    }
};

const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        res.json({
            message: "Event updated successfully",
            event
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating event",
            error: error.message
        });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        res.json({
            message: "Event deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting event",
            error: error.message
        });
    }
};

module.exports = {
    createEvent,
    getEvents,
    getEvent,
    updateEvent,
    deleteEvent
};