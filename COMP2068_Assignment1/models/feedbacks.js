const mongoose = require('mongoose');
//Create Schema
const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    comment: {
        type: String,
        required: true,
        trim: true
    }
});
//Create and instantiate model with schema
const Feedbacks = mongoose.model("Feedbacks", FeedbackSchema);
module.exports = Feedbacks;