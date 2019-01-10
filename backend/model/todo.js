const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const todoSchema = new Schema(
    {
        text: String,
        importance: Number,
        active: Boolean,
    },
    {
        versionKey: false,
    },
);

module.exports = Mongoose.model("todo", todoSchema);