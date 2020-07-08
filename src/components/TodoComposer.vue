<template>
    <div class="todo-composer">
        <input type="text" v-model="todoText">
        <button @click="addTodo">Add todo</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            todoText: ''
        }
    },
    methods: {
        addTodo() {
            if (this.todoText.trim() === '') return

            this.$store.commit("addTodo", {text: this.todoText})

            this.todoText = ''
        }
    }
}
</script>
<style lang="scss" scoped>
    *, *:active {
        outline: none;
    }
    .todo-composer {
        display: flex;
    }
    input {
        flex-grow: 1;
        border: 1px solid #ddd;
        padding: 10px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    button {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
</style>