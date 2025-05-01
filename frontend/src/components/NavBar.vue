<template>
  <nav id="NavBar">
    <RouterLink class="a" id="home" to="/">
      <span>Home</span>
    </RouterLink>
    <div id="rightButtons">
      <RouterLink class="a" id="photo" to="/photography">
        <span>Photography</span>
      </RouterLink>
      <RouterLink class="a" id="about" to="/about">
        <span>About</span>
      </RouterLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
  @import "../css/NavBar.css";

  .a{
    color: var(--alt1);
  }
</style>