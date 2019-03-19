<template>
  <div id="app">
    <section class="todoapp">
      <todo-header :addTodo="addTodo"></todo-header>
      <todo-content></todo-content>
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
      this.todos.push({
        id: v4(),
        content: newTodo,
        isCompleted: false,
      });
    },
  },
  components: {
    TodoHeader,
    TodoContent,
    TodoFooter,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
