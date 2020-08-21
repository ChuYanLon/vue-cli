<template>
  <div id="app">
    <h3>vuex学习开始...</h3>
    <p>初始值为:{{cont}}</p>
    <button @click="onbth">点击加一</button>
    <button @click="inbth">点击减一</button>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
  name: 'App',
  computed:{
    ...mapGetters([
            "cont"
    ])
  },
  methods:{
    ...mapActions([
            "onbth",
            "inbth"
    ])
  }
}
</script>

<style>

</style>
