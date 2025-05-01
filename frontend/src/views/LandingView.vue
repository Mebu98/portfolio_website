<template>
  <div id = "LandingView">
    <div id="selfieSection">
      <h1>Johannes Buitelaar</h1>
<!--        <img id="selfie" :src="'assets/images/selfie.jpg'" alt="selfie" style="max-width: 200px">-->
      <h2 id="selfieTextTyper"><TextTyper v-bind:texts="selfieTexts"/></h2>
    </div>
  </div>
</template>

<script setup>
  let selfieTexts = [
      'programmer',
      'coffee lover',
      'photographer',
      'student',
      'animal lover',
  ]
</script>

<script>
import TextTyper from "../components/TextTyper.vue";

export default {
  name: "LandingView",
  components: {TextTyper}
}
</script>

<style scoped>
  #LandingView{
    padding-top: 1em;
  }
</style>