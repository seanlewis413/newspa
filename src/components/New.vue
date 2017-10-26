<template>
  <div>
    <h1>{{pageTitle}}</h1>
    <label>Title</label><input type="text" v-model="pageTitle">
    <br>
    <label>New Item</label><input type="text" v-model="newTask" v-on:keyup.enter="newItem(newTask)">
    <br>
    <button v-on:click="newItem(newTask)">Submit</button>
    <ul v-for="item in items">
      {{item.message}}<button v-on:click="deleteItem(item)" class="btn btn-danger">Done!</button>
    </ul>
    <br>
    <div class="btn-group" role="group">
      
      <button class="btn btn-secondary" v-on:click="option1=true, option2=false, option3=false">Option1</button>
      <button class="btn btn-secondary" v-on:click="option1=false, option2=true, option3=false">Option2</button>
      <button class="btn btn-secondary" v-on:click="option1=false, option2=false, option3=true">Option3</button>
      
    </div>
    <div class="content" v-if="option1">Option 1 is the best!</div>
    <div class="content" v-if="option2">option 2 is better</div>
    <div class="content" v-if="option3">ilove option 3</div>
  </div>
</template>

<script>
export default {
  name: 'MyApp',
  data: function(){
      return {
      pageTitle: 'My New App',
      items: [
      { message: 'Foo' },
      { message: 'Bar' },
      { message: 'New' }
      ],
      option1: true,
      option2: false,
      option3: false}
    },

  methods:
  {
      newItem(task){
      this.items.push(
        { message: task }
      )
      },

      deleteItem(item)
      {
      this.items.splice(this.items.indexOf(item),1)
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

.btn-group .btn{
  margin: 0px;
  border-color: black;
  border-width: 1px;
}
</style>
