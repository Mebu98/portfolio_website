<template>
  <div id = "LandingView">
    <p>Hello World<TextTyper id="textTyper" text=" Hello TextTyper"/></p>
  </div>
</template>

<script>
import TextTyper from "../components/TextTyper.vue";

export default {
  name: "LandingView",
  components: {TextTyper}
}
</script>

<style scoped>
  #LandingView{
    margin-top: 100px;
  }
  #textTyper{
    width: 100px;
  }
</style>