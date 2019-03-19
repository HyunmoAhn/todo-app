<template>
  <li
    :class="{ completed: item.isCompleted }"
    v-if="!isEdit"
  >
    <div class="view">
      <input type="checkbox" class="toggle" @click="toggleComplete(item.id)" />
      <label @dblclick="toggleEdit">{{ item.content }}</label>
      <button class="destroy" type="button" @click="deleteTodo(item.id)" />
    </div>
  </li>
  <li class="editing" v-else>
    <input
      ref="input"
      v-model="value"
      type="text"
      class="edit"
      @blur="isEdit = false"
      @keydown.enter="updateContent"
      @keydown.esc="cancelUpdate"
    />
  </li>
</template>
<script>
export default {
  data() {
    return {
      value: this.item.content,
      isEdit: false,
    };
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    updateContent() {
      this.updateTodo(this.item.id, this.value);
      this.isEdit = false;
    },
    cancelUpdate() {
      this.value = this.item.content;
      this.isEdit = false;
    },
  },
  updated() {
    if (this.isEdit) {
      this.$refs.input.focus();
    }
  },
  props: {
    item: Object,
    updateTodo: Function,
    deleteTodo: Function,
    toggleComplete: Function,
  },
};
</script>
