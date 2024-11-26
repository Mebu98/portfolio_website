<template>
  <div v-if="selectedPhoto" class="photoModal">
    <div class="photoModalBackground" @click="$emit('close')"/>
    <div class="modalContent">
      <input type="range" min="1" max="100" step="1" id="zoom" :value="zoom" @input="zoom = $event.target.value"/>
      <img id="image" :src="selectedPhoto.imgUrl + '.jpg'" :alt="selectedPhoto.altText">
      <div id="imageInfo">
        <h2>Hello World</h2>
        <p>zoom: {{zoom}} </p>
      </div>
    </div>
  </div>
</template>
<script setup>

  import {ref} from "vue";

  let zoom = ref(1);

</script>

<script>
export default {
  props: ['selectedPhoto'],
  name: "PhotoModal"
}
</script>

<style scoped>
#image{
  scale: calc(v-bind('zoom') * 0.1);
}
  .photoModal {
    left: 0;
    top: 0;
    display: flex;
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;

    place-content: center;
  }

  .photoModalBackground{
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
  }

  .modalContent{
    display: flex;
    z-index: 2;
    gap: 10px;
    place-self: center;
    max-width: 95vw;
    max-height: 95vh;
  }

  .modalContent img {
    max-width: 95vw;
    max-height: 95vh;
    object-fit: contain;
  }

  #imageInfo {
    background: var(--main-bg-color);
  }
</style>