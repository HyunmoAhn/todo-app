<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ length }}</strong> item left</span>
    <ul class="filters">
      <li><a href="#/" class="selected">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="deleteCompleted">
      Clear completed
    </button>
  </footer>
</template>
<script>
export default {
  name: 'todo-footer',
  props: {
    length: Number,
    deleteCompleted: Function,
  },
};
</script>
