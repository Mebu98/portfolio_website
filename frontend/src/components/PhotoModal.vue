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
import {imgKitEndpoint} from "../config";

const imageSettings = "/tr:q-auto/"

</script>

<script>

export default {
  props: ['selectedPhoto'],
  name: "PhotoModal",
}
</script>

<style scoped>

  .photoModal {
    position: fixed;
    display: flex;
    vertical-align: middle;
    margin-top: 1%;
    z-index: 1;
    max-height: calc(var(--h_raw) * 0.95);
    max-width: calc(var(--w_raw) * 0.95);
  }

  .photoModalBackground{
    position: fixed;
    left: 0;
    top: 0;
    min-width: var(--w_raw);
    min-height: var(--h_raw);
    backdrop-filter: blur(1px);
  }


  .modalContent{
    --background-color: rgba(0,0,0,0.4);

    overflow: auto;

    display: flex;
    flex-direction: row;

    justify-content: center;

    z-index: 2;

    background-color: var(--background-color);
    backdrop-filter: blur(5px);
    padding: 10px;
    border-radius: 10px;

    gap: 10px;

    max-height: calc(var(--h_raw) * 0.95);
    max-width: calc(var(--w_raw) * 0.95);
  }


  #image{
    max-height: calc(var(--h_raw) * 0.90);
    max-width: calc(var(--w_raw) * 0.70);
    object-fit: contain;

  }

  .imageDiv{
    display: grid;
    place-items: center;

    max-width: 100%;
    max-height: 100%;
  }

  #imageInfo{
    width: 30%;
    background-color: color-mix(in srgb, var(--main-bg-color) 10%);
  }


</style>