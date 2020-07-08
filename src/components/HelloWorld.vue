<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Counter: {{ count }}</h3>
    <h3>Done todos count: {{ doneTodosCount }}</h3>
    <hr />    
    <CounterApp />
    <hr />
    <TodosApp />        
  </div>
</template>

<script>

import TodosApp from './TodosApp'
import CounterApp from './CounterApp'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(["doneTodosCount"])
  },  
  components: { TodosApp, CounterApp }
}
</script>