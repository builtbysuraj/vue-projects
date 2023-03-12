<script setup>
import {ref} from "vue"

const showModel = ref(false)
const newNote = ref("")
const errorMsg = ref("")
const notes = ref([])

function getRandomColor() {
 return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if(newNote.value.length < 3 || newNote.value.length > 25){
    return errorMsg.value = "Note must be greater 3 or more characters!"
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  })
  showModel.value = false
  newNote.value = ""
  errorMsg.value = ""
}
</script>

<template>
  <main>
  <div v-if="showModel" class="overlay">
    <div class="model">
      <textarea v-model.trim="newNote" name="note" id="note" cols="20" rows="10" minlength="3"></textarea>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <button @click="addNote">Add Notes</button>
      <button @click="showModel = false" class="close">close</button>
    </div>
  </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModel = true">+</button>
      </header>
      <div class="cards-container">
        <div v-for="note in notes" :key="note.id" class="card" :style="{backgroundColor: note.backgroundColor}">
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">
            {{ note.date.toLocaleDateString("en-US") }}
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main{
  width: 100%;
  height: 100%;
}
.container{
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1{
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 60px;
}
header button{
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}
.card{
  width: 250px;
  height: 250px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  word-spacing: .5cap;
  letter-spacing: .2cap;
  line-height: 2cap;
}
.date{
  font-size: 12.3px;
  font-weight: bold;
}
.cards-container{
  display: flex;
  flex-wrap: wrap;
}
.overlay{
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.model{
  width: 750px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  padding: 30px;
  position: relative;
}
.model button {
  padding: 10px 20px ;
  font-size: 16px;
  width: 100%;
  background-color: blueviolet;
  color: white;
  cursor: pointer;
  border: none;
  margin-top: 15px;
}
.model .close{
  background-color: rgb(193, 15, 15);
}
textarea{
  font-size: 16px;
}
.model p{
  color: rgb(193, 15, 15);
}
</style>