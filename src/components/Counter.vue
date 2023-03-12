<script setup>
import { ref } from 'vue'
let count = ref(0)

</script>

<template>
  <div class="card">
    <h1>The counter is...</h1>
    <h1>{{ count }}</h1>
    <button type="button" @click="count > 0 ? count-- : null">-</button>
    <button type="button" @click="count = 0">reset</button>
    <button type="button" @click="count++">+</button>
  </div>
</template>

<style scoped>
.card{
  border-radius: 5px;
  padding: 50px;

  text-align: center;
}

button{
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: aliceblue;
  cursor: pointer;
}
</style>