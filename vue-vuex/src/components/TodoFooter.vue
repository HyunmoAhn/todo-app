<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ leftNumber }}</strong> item left</span>
    <ul class="filters">
      <li><a href="#/" :class="{ selected: filter === 'all' }">All</a></li>
      <li><a href="#/active" :class="{ selected: filter === 'active' }" >Active</a></li>
      <li><a href="#/completed" :class="{ selected: filter === 'completed' }">Completed</a></li>
    </ul>
    <button class="clear-completed" @click="clearCompleted">
      Clear completed
    </button>
  </footer>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import * as mutations from '@/store/mutations';

export default {
  name: 'todo-footer',
  computed: {
    ...mapState({
      filter: state => state.filter,
    }),
    ...mapGetters([
      'leftNumber',
    ]),
  },
  methods: {
    ...mapMutations({
      clearCompleted: mutations.CLEAR_COMPLETED,
    }),
  },
};
</script>
