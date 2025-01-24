<template>
  <div v-if="selectedPhoto" class="photoModal">
    <div class="photoModalBackground" @click="$emit('close')"/>
    <div class="modalContent">
      <div class="imageDiv">
        <img id="image" :src="imgKitEndpoint + imageSettings + selectedPhoto.imgName" :alt="selectedPhoto.altText">
        <a :href="imgKitEndpoint + selectedPhoto.imgName" target="_blank"><button>Full image</button></a>
      </div>

      <div id="imageInfo">
        <h2>{{selectedPhoto.title}}</h2>
        <p>{{
            selectedPhoto.description === '' ? "No description" : selectedPhoto.description
          }}</p>
      </div>

      <button style="height: 2rem; position: static; top: 10px; right: 10px" @click="$emit('close')" type="button">X</button>
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
    min-width: 100%;
    min-height: 100%;
    backdrop-filter: blur(1px);
  }


  .modalContent{
    --background-color: rgba(0,0,0,0.4);

    overflow: auto;

    display: flex;
    flex-flow: row;
    z-index: 2;

    background-color: var(--background-color);
    backdrop-filter: blur(5px);
    padding: 10px;
    border-radius: 10px;

    gap: 10px;
    place-self: center;
    max-width: 95vw;
    max-height: 95vh;
  }

  .imageDiv img {
    min-height: 20vh;
    min-width: 20vw;
    max-width: 75vw;
    max-height: 90vh;
    object-fit: contain;
  }

  .imageDiv{
    display: flex;
    flex-direction: column;
    place-items: center;
  }


</style>