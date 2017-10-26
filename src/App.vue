<template>
  <div id="app">
    <div class="container">
    <button class="btn btn-secondary" v-on:click="option1=true, option2=false, option3=false">About Vue</button>
    <button class="btn btn-secondary" v-on:click="option1=false, option2=true, option3=false">Task List</button>
    <button class="btn btn" v-on:click="option1=false, option2=false, option3=true">Log In</button>
    <img src="./assets/logo.png">
    <div v-if="option1"><HelloWorld/></div>
    <div v-if="option2"><MyApp/></div>
    <div v-if="option3"><Login/></div>
    </div>
  </div>
</template>

<script>
import MyApp from './components/New'
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'




export default {
  name: 'app',
  components: {
    HelloWorld,
    MyApp,
    Login
  },
  data(){
      return {
      pageTitle: 'My New App',
      
      option1: true,
      option2: false,
      option3: false,     
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
