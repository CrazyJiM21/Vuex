<template>
  <div class="todos">
    <h2>This is TODO App</h2>
		<TodoComposer />
    <ul>
      <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import Todo from "./Todo";
import TodoComposer from "./TodoComposer";

export default {
  computed: {
    ...mapState(["todos"]),
    ...mapGetters(["doneTodosCount"])
  },
  components: { Todo, TodoComposer }
};
</script>
<style scoped>
.todos {
	width: 600px;
  margin: 0 auto;
}
ul {
  padding: 0;
  list-style: none;
}
</style>