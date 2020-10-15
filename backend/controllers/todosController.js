const Todo = require('../models/todoModel')

const todoController = {

    listTodos: async (req, res) => {
        const data = await Todo.find()
        res.json({ "response": data })
    },
    createTodo: async (req, res) => {
        var title = req.body.title;
        var listName = req.body.listName;
        var description = req.body.description;
        const newTodo = new Todo({
            listName: listName,
            title: title,
            description: description,
        })
        await newTodo.save();
        res.json({ "response": "done" })
    },
    deleteTodo: async (req, res) => {
        var id = req.params.id;
        await Todo.deleteOne({ _id: id })
        res.json({ "respuesta": "deleted" })
    },
    putTodo: async (req, res) => {
        var id = req.params.id;
        var listName = req.body.listName;
        var title = req.body.title;
        var description = req.body.description;

        await Todo.updateOne({ _id: id }, { listName: listName }, { title: title }, { description: description })
        res.json({ "respuesta": "ok" })

    },


}

module.exports = todoController;