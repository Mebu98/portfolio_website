<template>
  <NavBar/>
  <main>
    <RouterView id="RouterView"/>
    <h1>This is a h1</h1>
    <h2>This is a h2</h2>
    <h3>This is a h3</h3>
    <p>this is a p</p>
    <span>this is a span</span>
    <p>this is the API url:{{apiUrl}}</p>

    <div style="height: 1000px">
      <p>Big div to test scroll</p>
    </div>
  </main>
</template>

<script setup>

import {apiUrl} from "./config";
import NavBar from "@/components/NavBar.vue";
</script>

<style module>
  @import "css/App.css";
  @import "css/NavBar.css";
</style>
