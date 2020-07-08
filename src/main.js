import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'First todo', done: true },
      { id: 2, text: 'Second todo', done: false },
      { id: 3, text: 'Third todo', done: true },
      { id: 4, text: 'Fourth todo', done: true },
      { id: 5, text: 'Fifth todo', done: false },
      { id: 6, text: 'Sixth todo', done: false },
      { id: 7, text: 'Seventh todo', done: true },
    ]
  },
  mutations: {
    increment(state) {
      state.count++
    },
    doTodo(state, todo) {
      state.todos = state.todos.map((td) => {
        if (td.id === todo.id) {
          td.done = !td.done
        }
        return td
      })
    },
    addTodo(state, payload) {
      const last = state.todos.slice(-1).pop()
      state.todos.push({
        id: (last.id + 1),
        text: payload.text,
        done: false
      })
    },
    deleteTodo(state, todo) {
      state.todos = state.todos.filter(td => td !== todo)
    },
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
