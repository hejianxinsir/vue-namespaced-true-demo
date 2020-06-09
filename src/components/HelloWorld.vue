<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    state 的 num: {{number}}<br>
    moduleA 的 num: {{xxx}}<br>
    <button @click="plus">add 1</button><br>
    调用加了 namespaced: true 模块里的 add 方法：
    <button @click="oo">模块+1</button>

    <!--
      重点： 当 store 里的两个同名 add 方法出现时，我们在这个页面
            调用这个方法。可以发现，上面的两个 num 的值都加一了。

            因为同名方法注册在全局。如果不想要这种效果，加 namespaced: true
    -->

  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    number(){
      return this.$store.getters.getNum
    },
    ...mapGetters({
      xxx: 'getModuleANum'
    })
  },
  methods: {
    ...mapMutations({
      plus: 'add',
      oo: 'moduleA/add'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
