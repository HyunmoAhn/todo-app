<template>
  <div id="app">
    <section class="todoapp">
      <todo-header :addTodo="addTodo"></todo-header>
      <todo-content
        :todos="todos"
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
        :toggleComplete="toggleComplete"
      />
      <todo-footer></todo-footer>
    </section>
  </div>
</template>

<script>
import { v4 } from 'uuid';
import TodoHeader from './components/TodoHeader.vue';
import TodoContent from './components/TodoContent.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'app',
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      if (newTodo.length > 0) {
        this.todos.push({
          id: v4(),
          content: newTodo,
          isCompleted: false,
        });
      }
    },
    toggleComplete(id) {
      const targetIndex = this.todos.findIndex(target => target.id === id);
      const target = this.todos[targetIndex];

      this.todos.splice(targetIndex, 1, { ...target, isCompleted: !target.isCompleted });
    },
    updateTodo(id, newContent) {
      const targetIndex = this.todos.findIndex(target => target.id === id);
      const target = this.todos[targetIndex];

      this.todos.splice(targetIndex, 1, { ...target, content: newContent });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(target => target.id !== id);
    },
  },
  components: {
    TodoHeader,
    TodoContent,
    TodoFooter,
  },
};
</script>
