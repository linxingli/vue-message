<template>
  <div id="app">
    <button @click="show">按钮</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Message from './components/message.js'
  // 使用插件
  Vue.use(Message, { xxx: 1234 })

  export default {
    name: 'App',
    methods: {
      show () {
        this.$message.info({
          msg: '提交成功！！！',
          duration: 3000
        })
      }
    }
  }
</script>