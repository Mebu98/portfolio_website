<template>
  <div v-if="selectedPhoto" class="photoModal">
    <div class="photoModalBackground" @click="$emit('close')"/>
    <div class="modalContent">
      <div class="imageDiv">
        <img id="image" :src="imgKitEndpoint + imageSettings + selectedPhoto.imgName" :alt="selectedPhoto.altText">
        <a :href="imgKitEndpoint + selectedPhoto.imgName" target="_blank">Full image</a>
      </div>

      <div id="imageInfo">
        <h2>{{selectedPhoto.title}}</h2>
        <p>{{
            selectedPhoto.description === '' ? "No description" : selectedPhoto.description
          }}</p>
      </div>
      <button style="height: 2rem; position: absolute; top: 10px; right: 10px" @click="$emit('close')" type="button">X</button>/
    </div>
  </div>
</template>

<script setup>
import {imgKitEndpoint} from "@/config";

const imageSettings = "/tr:q-20/"

</script>

<script>

export default {
  props: ['selectedPhoto'],
  name: "PhotoModal",
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
    flex-flow: row;
    z-index: 2;
    gap: 10px;
    place-self: center;
    max-width: 95vw;
    max-height: 95vh;
  }

  .imageDiv img {
    min-height: 10vh;
    min-width: 10vw;
    max-width: 75vw;
    max-height: 90vh;
    object-fit: contain;
  }

  .imageDiv{
    display: flex;
    flex-direction: column;
    place-items: center;
    margin-bottom: 10px;
  }

  #imageInfo {
    background: var(--main-bg-color);
  }
</style>