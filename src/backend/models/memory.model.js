const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema({
    title: String,
    content: String,
    date: String
});

const Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory;