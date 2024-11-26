<template>

  <ul id="imageList">
    <li v-for="photo in photos" :key="photo.imgUrl">
      <img :src="photo.imgUrl+'t.jpg'" :alt="photo.altText" @click="selectPhoto(photo)">
    </li>
  </ul>

  <PhotoModal v-if="modalOpen" v-bind:selected-photo="selectedPhoto" @close="modalOpen = false"/>
</template>

<script setup>
  import {samplePhotos} from "@/sampleData";
  import PhotoModal from "@/components/PhotoModal";
  import {ref} from "vue";

  const photos = samplePhotos;
  const selectedPhoto = ref();
  const modalOpen = ref(false);

  const selectPhoto = (photo) => {
    modalOpen.value = true;
    selectedPhoto.value = photo;
    console.log(photo);
  }
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