<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      type="text"
      v-model.trim="value"
      @keydown.enter="addProcess"
      placeholder="What needs to be done?"
    />
  </header>
</template>
<script>
import { mapMutations } from 'vuex';
import { v4 } from 'uuid';
import * as mutations from '@/store/mutations';

export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    ...mapMutations([
      mutations.ADD_TODO,
    ]),
    addProcess() {
      if (this.value) {
        this[mutations.ADD_TODO]({ id: v4(), content: this.value });
        this.value = '';
      }
    },
  },
};
</script>
