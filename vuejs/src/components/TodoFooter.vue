<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ length }}</strong> item left</span>
    <ul class="filters">
      <li><a href="#/" :class="{ selected: filter === 'all' }">All</a></li>
      <li><a href="#/active" :class="{ selected: filter === 'active' }" >Active</a></li>
      <li><a href="#/completed" :class="{ selected: filter === 'completed' }">Completed</a></li>
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
    filter: String,
    length: Number,
    deleteCompleted: Function,
  },
};
</script>
