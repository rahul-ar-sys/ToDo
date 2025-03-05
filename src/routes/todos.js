const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo'); // Import your Todo model

// GET all todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new todo
router.post('/todos', async (req, res) => {
  console.log("Received request body:", req.body); // Debugging line
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


// GET a single todo by ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT - Update a todo by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTodo) return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE - Remove a todo by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
