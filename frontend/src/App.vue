<template>
  <nav id="nav">
    <RouterLink to="/"><button>Home</button></RouterLink>
    <RouterLink to="/photography"><button>Photography</button></RouterLink>
    <RouterLink to="/about"><button>About</button></RouterLink>

  </nav>
  <main>
    <RouterView/>
    <h1>This is a h1</h1>
    <h2>This is a h2</h2>
    <h3>This is a h3</h3>
    <p>this is a p</p>
    <span>this is a span</span>
    <p>this is the API url:{{apiUrl}}</p>
  </main>
</template>

<script setup>

import {apiUrl} from "./config";
</script>

<style module>
  @import "css/App.css";
  #nav > * {
    margin-right: 30px;
  }
</style>
