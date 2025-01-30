<template>
  <nav id="NavBar">
    <RouterLink to="/">
      <button>Home</button>
    </RouterLink>
    <div id="hello">
      <RouterLink to="/photography">
        <button>Photography</button>
      </RouterLink>
      <RouterLink to="/about">
        <button>About</button>
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
</style>