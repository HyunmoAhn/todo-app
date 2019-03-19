<template>
  <section class="main">
    <input class="toggle-all" id="toggle-all" type="checkbox" :checked="isAllCompleted" />
    <label htmlFor="toggle-all" @click="checkAll">Mark all async complete</label>
    <ul class="todo-list">
      <todo-item
        v-for="item in todos"
        :item="item"
        :key="item.id"
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
        :toggleComplete="toggleComplete"
      />
    </ul>
  </section>
</template>
<script>
import TodoItem from './TodoItem.vue';

export default {
  props: {
    todos: Array,
    isAllCompleted: Boolean,
    checkAll: Function,
    updateTodo: Function,
    deleteTodo: Function,
    toggleComplete: Function,
  },
  components: {
    TodoItem,
  },
};
</script>
