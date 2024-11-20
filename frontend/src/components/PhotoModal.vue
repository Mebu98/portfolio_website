<template>
  <div v-if="visible" class="photoModal">
    <div class="photoModalBackground" @click="visible = false"/>
    <div class="modalContent">
      <img :src="selectedPhoto.imgUrl + '.jpg'" :alt="selectedPhoto.altText">
      <div id="imageInfo">
        <h2>Hello World</h2>
        <p>Description </p>
      </div>
    </div>
  </div>
</template>
<script setup>
  import {ref} from "vue";

  // eslint-disable-next-line no-undef
  defineProps(['selectedPhoto']);

  // eslint-disable-next-line no-undef
  const visible = ref(true);
</script>

<script>
export default {
  name: "PhotoModal"
}
</script>

<style scoped>
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
    background: grey;
  }
</style>