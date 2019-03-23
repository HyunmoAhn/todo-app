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
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    addProcess() {
      this.addTodo(this.value);
      this.value = '';
    },
  },
  props: {
    addTodo: Function,
  },
};
</script>
