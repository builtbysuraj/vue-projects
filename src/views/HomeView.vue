<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="container">
    <div>
      <h1><em> &lt; Hello vue world /> </em></h1>
      <br />
      <RouterLink active-class="active" to="/">home</RouterLink>
      <RouterLink active-class="active" to="/counter">counter</RouterLink>
      <RouterLink active-class="active" to="/notes">notes</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
a {
  margin: 10px;
  padding: 8px;
  text-decoration: none;
  font-size: 18px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: cornflowerblue;
}
.active {
  font-weight: bold;
  color: greenyellow;
}
</style>
