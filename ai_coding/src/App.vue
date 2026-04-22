<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>