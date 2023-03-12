<script setup>
import { ref } from "vue";
let count = ref(0);
</script>

<template>
  <div class="card">
    <main>
      <h1>The counter is...</h1>

      <h1>{{ count }}</h1>

      <button type="button" @click="count > 0 ? count-- : null">-</button>
      <button type="button" @click="count = 0">reset</button>
      <button type="button" @click="count++">+</button>
    </main>
  </div>
</template>

<style scoped>
.card {
  text-align: center;
  border: 1px solid red;
  border-radius: 5px;
  margin-top: 50px;
}
h1 {
  margin-bottom: 15px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: aliceblue;
  cursor: pointer;
}
</style>
