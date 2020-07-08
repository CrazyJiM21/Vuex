<template>
    <div class="counter">
        <h2>This is Counter App</h2>
        <button @click="increment">Click</button>

        <h3>Counter: {{ count }}</h3>
        <h3>Counter two times: {{ countTwoTimes }}</h3>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    methods: {
        increment() {
            this.$store.commit('increment')
            console.log(this.$store.state.count)
        }
    },
    computed: {
        countTwoTimes() {
            return this.count * 2
        },
        ...mapState([
            'count'
        ])
    },
}
</script>