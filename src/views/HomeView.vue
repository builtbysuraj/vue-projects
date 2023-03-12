<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
  <div class="container">
    <div>
      <h1> <em> &lt; Hello vue world /> </em> </h1>
      <br>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/counter">counter</RouterLink>
      <RouterLink to="/notes">notes</RouterLink>
    </div>
  </div>
</template>
 
<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
a{
  margin: 10px;
  padding: 8px;
  text-decoration: none;
  font-size: 18px;  
  border: 2px solid black;
  border-radius: 5px;
  background-color: cornflowerblue;
}
</style>