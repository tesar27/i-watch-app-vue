<template>
  <div>
    <h1>This is an about page ss</h1>
    <MyButton text="MyButton" @buttonClicked="showAlert"/>
  </div>
</template>
<script setup>
import MyButton from '../components/my_components/MyButton.vue'

const showAlert = () => {
  alert('Child button was clicked!')
}
</script>