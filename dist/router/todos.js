"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(200).json({ msg: "Added", todo: newTodo, todos });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const body = req.body;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex]['text'] = body.text;
        return res.status(200).json({ msg: "Successfully modified!", todos });
    }
    res.status(404).json({ msg: 'Not found' });
});
router.delete('/todo/:todoID', (req, res, next) => {
    todos = todos.filter(todoItem => todoItem.id !== req.params.todoID);
    res.status(200).json({ msg: "Deleted", todos });
});
exports.default = router;
