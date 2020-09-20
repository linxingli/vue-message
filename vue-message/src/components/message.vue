<template>
  <div>
    <div v-for="item in messageList"
         :key="item.id">
      {{item.msg}}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        messageList: [],
        id: ''
      }
    },
    created () {
      this.id = 0
      console.log('_info1111', this._info);
    },
    methods: {
      add (option) {
        let item = {
          ...option,
          id: this.id++
        }
        this.messageList.push(item)
        item.timer = setTimeout(() => {
          this.remove(item)
        }, item.duration)
      },
      remove (item) {
        let index = this.messageList.findIndex(v => v.id === item.id)
        this.messageList.splice(index, 1)
        clearTimeout(item.timer)
      }
    }
  }
</script>

<style>
</style>