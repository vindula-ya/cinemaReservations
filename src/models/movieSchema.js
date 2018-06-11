"use strict";

// Get all dependencies
const mongoose = require("../database");
const autoIncrement = require("mongoose-sequence")(mongoose);

// Define schema
const schema = {
    name: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    price: {
        type: mongoose.Schema.Types.Number,
        required: true
    }
};

// Collection name
const collectionName = "movie";
// Create Schema
const movieSchema = mongoose.Schema(schema);
// Added auto incrementing field
movieSchema.plugin(autoIncrement, {
    inc_field: "movieID"
});
// Create Model
const movie = mongoose.model(collectionName, movieSchema);

// Export movie model
module.exports = movie;