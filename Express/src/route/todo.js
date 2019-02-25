const express = require('express');
const router = express.Router();
const {
  createTodoList,
  editTodoValue,
  editTodoIsComplete,
  getTodoList,
} = require('../entity/todo');

// Read Todo list
router.get('/', (req, res) => {
  const isComplete = req.query.isComplete === 'true';

  getTodoList(isComplete)
    .then((list) => {
      res.status(200).json(list);
    });
});

// Make Todo
router.post('/add', (req, res) => {
  const { value, isComplete } = req.body;
  createTodoList(value, isComplete)
    .then((result) => {
      res.status(200).json(result);
    });
});

// Edit Todo Value
router.post('/edit', (req, res) => {
  const { id, value, isComplete } = req.body;

  if (value) {
    editTodoValue(id, value)
      .then((result) => {
        res.status(200).json(result);
      });
  } else if (isComplete) {
    editTodoIsComplete(id, isComplete)
      .then((result) => {
        res.status(200).json(result);
      });
  }
});

// Delete Todo isComplete
router.delete('/', (req, res) => {

});



module.exports = router;