<template>
  <h3>{{ title }}</h3>
  <input type="text" ref="name">
  <div v-if="showButton">
    <button v-on:click="handleClick">click me</button>
  </div>
  <button @click.shift.alt="toogleButton">show button</button>
  <FormVue :minimum="minimum" @close="toogleButton">
    <h2>Donate Form</h2>
  </FormVue>
</template>

<script>
import FormVue from './components/Form.vue'

export default {
  name: 'App',
  components: {
    FormVue
  },
  data(){
    return {
      title: 'First Vue Projct',
      minimum: 100,
      showButton: false
    }
  },
  methods:{
    handleClick(){
      this.$refs.name.focus()
      this.$refs.name.classList.add('active')
    },
    toogleButton(){
      this.showButton = !this.showButton
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
