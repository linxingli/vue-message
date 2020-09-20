import Vue from 'vue'
import messageComponent from './message.vue'
const getInstance = () => {
  let vm = new Vue({
    info: '12323212',
    render: h => h(messageComponent)
  }).$mount() // 先在内存中挂载
  document.body.append(vm.$el)
  return vm.$children[0]
}

// 单例模式
let instance
const onceInstance = () => {
  instance = instance || getInstance()
  return instance
}

const Message = {
  info(option) {
    onceInstance().add(option)
  },
  error() {},
  sucess() {},
}

export {
  Message
}
let _Vue;
export default {
  // 开发一个插件需提供install方法
  install(Vue, options) {
    // 避免重复use
    if (!_Vue) {
      _Vue = Vue
      Vue.prototype.$message = Message
      console.log('options', options)
    }

    // 使用混入和递归的方法给所有子组件增加属性
    Vue.mixin({
      created() {
        if (this.$options.info) {
          this._info = this.$options.info
        } else {
          this._info = this.$parent && this.$parent._info
        }
      }
    })
  }
}