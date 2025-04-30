<template>
  <main>
    <RouterView/>
  </main>

  <!-- Bit weird having the NavBar here considering it's on the top of the page,
       but it prevents having to play around with Z-index in css. -->
  <NavBar/>
</template>

<script setup>

import NavBar from "../src/components/NavBar.vue";
</script>

<style module>
  @import "css/App.css";
  @import "css/NavBar.css";
</style>
