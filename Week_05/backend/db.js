const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://100xdevs:BQ8eKZvriLMq03to@cluster0.sxwb9sq.mongodb.net/todo?retryWrites=true&w=majority");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    isCompleted: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo: todo
}