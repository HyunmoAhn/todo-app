<template>
  <li
    :class="{ completed: item.isComplete }"
    v-if="!item.isEdit"
  >
    <div class="view">
      <input
        type="checkbox"
        class="toggle"
        :checked="item.isComplete"
        @click="toggleComplete"
      />
      <label @dblclick="toggleEdit">{{ item.content }}</label>
      <button class="destroy" type="button" @click="deleteTodo" />
    </div>
  </li>
  <li class="editing" v-else>
    <input
      ref="input"
      type="text"
      class="edit"
      v-model="value"
      @blur="updateContent"
      @keydown.enter="updateContent"
      @keydown.esc="cancelUpdate"
    />
  </li>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import * as mutations from '@/store/mutations';

export default {
  computed: {
    // ...mapState doesn't support setter.
    // https://stackoverflow.com/questions/44272405/mapstate-with-setter
    value: {
      get() {
        return this.$store.state.currentEdit;
      },
      set(value) {
        this.changeInput(value);
      },
    },
    ...mapGetters({
      getInfo: 'infoById',
    }),
    item() {
      return this.getInfo(this.id);
    },
  },
  methods: {
    ...mapMutations([
      mutations.UPDATE_TODO,
      mutations.CHANGE_EDIT_VALUE,
      mutations.DELETE_TODO,
    ]),
    changeInput(value) {
      this[mutations.CHANGE_EDIT_VALUE]({
        value,
      });
    },
    toggleEdit() {
      this[mutations.UPDATE_TODO]({
        id: this.id,
        isEdit: !this.item.isEdit,
      });
      this[mutations.CHANGE_EDIT_VALUE]({
        value: this.item.content,
      });
    },
    toggleComplete() {
      this[mutations.UPDATE_TODO]({
        id: this.id,
        isComplete: !this.item.isComplete,
      });
    },
    updateContent() {
      this[mutations.UPDATE_TODO]({
        id: this.id,
        content: this.value,
        isEdit: false,
      });
    },
    cancelUpdate() {
      this[mutations.UPDATE_TODO]({
        id: this.id,
        isEdit: false,
      });
    },
    deleteTodo() {
      this[mutations.DELETE_TODO]({
        id: this.id,
      });
    },
  },
  updated() {
    if (this.item.isEdit) {
      this.$refs.input.focus();
    }
  },
  props: {
    id: String,
  },
};
</script>
