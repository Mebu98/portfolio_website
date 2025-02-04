<template>
  <div class="photoModalBackground" @click="$emit('close')"/>
  <div class="photoModal">
    <div class="modalContent">

      <img id="photo" :src="imgKitEndpoint + imageSettings + selectedPhoto.imgName" :alt="selectedPhoto.altText">

      <div id="imageInfo">
        <h2>{{selectedPhoto.title}}</h2>
        <p>{{
            selectedPhoto.description === undefined ? "No description" : selectedPhoto.description
          }}</p>
        <a id="photoLink" :href="imgKitEndpoint + selectedPhoto.imgName" target="_blank"><button>Full image</button></a>
        <!--        <button id="closeButton" @click="$emit('close')" type="button">X</button>-->

      </div>
    </div>
  </div>
</template>

<script setup>
import {imgKitEndpoint} from "../config.js";

const imageSettings = "/tr:q-auto/"
</script>

<script>

export default {
  props: ['selectedPhoto'],
  name: "PhotoModal",
}
</script>

<style scoped>
  @import "../css/PhotoModal.css";
</style>