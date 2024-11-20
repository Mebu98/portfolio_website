<template>

  <ul id="imageList">
    <li v-for="photo in photos" :key="photo.imgUrl">
      <img :src="photo.imgUrl+'t.jpg'" :alt="photo.altText" @click="selectedPhoto = photo">
    </li>
  </ul>

  <PhotoModal v-if="selectedPhoto != null" :selected-photo="selectedPhoto"/>
</template>

<script setup>
  import {samplePhotos} from "@/sampleData";
  import PhotoModal from "@/components/PhotoModal";
  import {ref} from "vue";

  const photos = samplePhotos;
  const selectedPhoto = ref();
</script>

<script>
export default {
  name: "PhotographyView",
}
</script>

<style scoped>

  #imageList img {
    max-width: 100px;
  }

</style>