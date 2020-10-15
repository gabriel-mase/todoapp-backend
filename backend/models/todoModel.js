const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({
    listName: { type: String },
    title: { type: String },
    description: { type: String }
})

const Todo = mongoose.model('todos', todosSchema)

module.exports = Todo