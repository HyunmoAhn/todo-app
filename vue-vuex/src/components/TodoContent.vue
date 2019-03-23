<template>
  <section class="main">
    <input class="toggle-all" id="toggle-all" type="checkbox" :checked="isAllCompleted" />
    <label htmlFor="toggle-all" @click="checkAll">Mark all async complete</label>
    <ul class="todo-list">
      <todo-item
        v-for="id in filteredIds"
        :key="id"
        :id="id"
      />
    </ul>
  </section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import * as actions from '@/store/actions';
import TodoItem from './TodoItem.vue';

export default {
  computed: {
    ...mapGetters([
      'filteredIds',
      'isAllCompleted',
    ]),
  },
  methods: {
    ...mapActions({
      checkAll: actions.CHECK_ALL,
    }),
  },
  components: {
    TodoItem,
  },
};
</script>
