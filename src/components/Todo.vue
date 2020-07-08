<template>
  <li @click="doTodo">
    <span>{{ todo.id }}</span>
    <span class="text">{{ todo.text }}</span>
    <input type="checkbox" :checked="todo.done" />
    <span class="delete" @click.stop="deleteTodo">&#10006;</span>
  </li>
</template>
<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    doTodo() {
      this.$store.commit("doTodo", this.todo);
    },
    deleteTodo() {
        if (confirm("Are you sure?")) {
            this.$store.commit("deleteTodo", this.todo);
        }
    }
  }
};
</script>
<style lang="scss" scoped>
li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
  input {
    cursor: pointer;
  }
  .text {
    flex-grow: 1;
  }
  .delete {
    padding: 0px;
    line-height: 13px;
    margin: 3px 5px;
    color: red;
  }
}
</style>