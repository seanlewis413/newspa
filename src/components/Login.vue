<template>
  <div>
    <h1>{{this.pageTitle}}</h1>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
  data(){
      return {
        pageTitle: 'Login'
      }
}
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  display: inline-block;
  padding: 10px;
}

input{
  display: inline-block;
}
label{
  padding: 10px;
}
button{
  margin: 10px;
}

.content{
border: 10px; 
border-width: 10px;
border-color: black;
margin:10px;
}
</style>
