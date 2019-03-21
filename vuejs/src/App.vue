<template>
  <div id="app">
    <section class="todoapp">
      <todo-header
        :addTodo="addTodo"
      />
      <todo-content
        :todos="filteredTodos"
        :isAllCompleted="isAllCompleted"
        :checkAll="checkAll"
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
        :toggleComplete="toggleComplete"
      />
      <todo-footer
        :filter="filter"
        :length="todoLength"
        :deleteCompleted="deleteCompleted"
      />
    </section>
  </div>
</template>

<script>
import { v4 } from 'uuid';
import TodoHeader from './components/TodoHeader.vue';
import TodoContent from './components/TodoContent.vue';
import TodoFooter from './components/TodoFooter.vue';

const STORAGE_KEY = 'todos-vuejs';

export default {
  name: 'app',
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [],
      filter: 'all',
    };
  },
  created() {
    window.addEventListener('hashchange', this.getFilterStatue);
  },
  destroyed() {
    window.removeEventListener('hashchange', this.getFilterStatue);
  },
  computed: {
    filteredTodos() {
      if (this.filter === 'completed') return this.todos.filter(todo => todo.isCompleted === true);
      if (this.filter === 'active') return this.todos.filter(todo => todo.isCompleted === false);
      return this.todos;
    },
    todoLength() {
      return this.todos.filter(todo => todo.isCompleted === false).length;
    },
    isAllCompleted() {
      return this.todos.length !== 0 && this.todoLength === 0;
    },
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
    getFilterStatue() {
      switch (window.location.hash) {
        case '#/completed':
          this.filter = 'completed';
          break;
        case '#/active':
          this.filter = 'active';
          break;
        default:
          this.filter = 'all';
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
    deleteCompleted() {
      this.todos = this.todos.filter(target => target.isCompleted === false);
    },
    checkAll() {
      this.todos = this.todos.map(todo => ({ ...todo, isCompleted: !this.isAllCompleted }));
    },
  },
  watch: {
    todos() {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos));
    },
  },
  components: {
    TodoHeader,
    TodoContent,
    TodoFooter,
  },
};
</script>
