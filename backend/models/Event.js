const mongoose = require("mongoose");
const { type } = require("node:os");
const { title } = require("node:process");

const eventSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    Organizer: {
        type: String,
        required: true
    }
    
    
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event ;