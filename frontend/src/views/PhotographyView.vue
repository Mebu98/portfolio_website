<template>

  <ul id="imageList">
    <li v-for="photo in photos" :key="photo.imgUrl">
      <img class="thumbnail" :src="imgKitEndpoint + `/tr:q-auto,w-500,h-600/` + photo.imgName" :alt="photo.altText" @click="selectPhoto(photo)">
    </li>
  </ul>

  <PhotoModal v-if="modalOpen" v-bind:selected-photo="selectedPhoto" @close="modalOpen = false"/>
</template>

<script setup>
  import PhotoModal from "../components/PhotoModal.vue";
  import {ref} from "vue";
  import {imgKitEndpoint} from "../config.js";

  const selectedPhoto = ref();
  const modalOpen = ref(false);

  const selectPhoto = (photo) => {
    modalOpen.value = true;
    selectedPhoto.value = photo;
    console.log(photo);
  }
</script>

<script>
import axios from "axios";
import {apiUrl} from "../config.js";

export default {
  name: "PhotographyView",
  data() {
    return {
      photos: {},
    }
  },
  mounted() {
    this.fetchPhotos();
  },
  methods: {
    async fetchPhotos() {
      try {
        console.log(`Fetching photos from ${apiUrl}.`);
        const response = await axios.get(`${apiUrl}/api/photos`);
        console.log(response);
        this.photos = response.data;
      }
      catch (error) {
        console.log(error);
      }
    }
  }
}

</script>

<style>
  @import "../css/PhotographyView.css";
</style>