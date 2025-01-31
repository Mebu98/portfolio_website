<template>
  <NavBar/>
  <main>
    <RouterView id="RouterView"/>
  </main>
</template>

<script setup>

import NavBar from "@/components/NavBar.vue";
</script>

<style module>
  @import "css/App.css";
  @import "css/NavBar.css";
</style>
