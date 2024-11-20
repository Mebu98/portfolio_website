<template>
  <nav id="nav">
    <RouterLink to="/">Go to Home (currently goes to photography since there are no other categories)</RouterLink>
    <RouterLink to="/photography">Go to Photography view</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView/>
  </main>
</template>

<script>

</script>

<style module>
  @import "css/colors.css";

  #nav > * {
    margin-right: 30px;
  }

  body {
    background: var(--main-bg-color);
  }
</style>
