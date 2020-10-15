const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todosController')
router.route('/all')
    .get(todoController.listTodos)
    .post(todoController.createTodo)

router.route('/findOne/:id')
    .delete(todoController.deleteTodo)
    .put(todoController.putTodo)
module.exports = router;