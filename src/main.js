// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  name: "App",
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*var vm = new Vue({
  data(){
  return{
  newItem: function(task){
      this.items.push(
        { message: task }
      )
      },

      deleteItem: function(item){
      this.items.splice(0, item)
      },
      option1: false,
      option2: false,
      option3: false
     }}}
)

console.log(vm.option1)
*/