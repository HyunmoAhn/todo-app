<template>
  <div id="app">
    <section class="todoapp">
      <todo-header />
      <todo-content
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
import { mapMutations } from 'vuex';
import * as mutations from '@/store/mutations';
import getFilter from '@/utils/getFilter';
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
    window.addEventListener('hashchange', this.changeFilter);
  },
  destroyed() {
    window.removeEventListener('hashchange', this.changeFilter);
  },
  computed: {
    todoLength() {
      return this.todos.filter(todo => todo.isCompleted === false).length;
    },
    isAllCompleted() {
      return this.todos.length !== 0 && this.todoLength === 0;
    },
  },
  methods: {
    ...mapMutations([
      mutations.SET_FILTER,
    ]),
    changeFilter() {
      this[mutations.SET_FILTER]({ filter: getFilter() });
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
