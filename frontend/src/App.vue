<template>
  <nav id="nav">
    <RouterLink to="/">Go to Home (currently goes to photography since there are no other categories)</RouterLink>
    <RouterLink to="/photography">Go to Photography view</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>

  </nav>
  <main>
    <RouterView/>
    <h1>This is a h1</h1>
    <h2>This is a h2</h2>
    <h3>This is a h3</h3>
    <p>this is a p</p>
    <span>this is a span</span>
  </main>
</template>

<script setup>

</script>

<style module>
  @import "css/App.css";
  #nav > * {
    margin-right: 30px;
  }
</style>
