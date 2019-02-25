const Sequelize = require('sequelize');
const sequelize = new Sequelize('todo', 'root', '133114', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});

const Todo = sequelize.define('todo', {
  value: {
    type: Sequelize.STRING
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
  }
});

Todo.sync({ force: false });

function getTodoList(isComplete) {
  const selectByComplete = isComplete !== undefined ? { isComplete } : null;

  return sequelize.transaction((t) => {
    return Todo.findAll({
      where: selectByComplete,
    }, { transaction: t });
  })
}

function createTodoList(value, isComplete) {
  return sequelize.transaction((t) => {
    return Todo.create({
      value,
      isComplete,
    }, { transaction: t });
  })
}

function editTodoValue(id, value) {
  return sequelize.transaction((t) => {
    return Todo.update(
      {
        value,
      },
      {
        where: {
          id,
        },
        transaction: t,
      })
  })
}

function editTodoIsComplete(id, isComplete) {
  return sequelize.transaction((t) => {
    return Todo.update(
      {
        isComplete,
      },
      {
        where: {
          id,
        },
        transaction: t,
      })
  })
}

function deleteTodoList(id) {
  
}

module.exports = {
  createTodoList,
  editTodoValue,
  editTodoIsComplete,
  getTodoList,
};