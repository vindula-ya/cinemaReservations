"use strict";

// Get all dependencies
const mongoose = require("../database");
const autoIncrement = require("mongoose-sequence")(mongoose);

// Define schema
const schema = {
    occupied: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    }
};

// Collection name
const collectionName = "Seat";
// Create Schema
const seatSchema = mongoose.Schema(schema);
// Added auto incrementing field
seatSchema.plugin(autoIncrement, {
    inc_field: "SeatID"
});
// Create Model
const Seat = mongoose.model(collectionName, seatSchema);

// Export Seat model
module.exports = Seat;