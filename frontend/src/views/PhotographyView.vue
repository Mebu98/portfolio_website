<template>

  <ul id="imageList">
    <li v-for="photo in photos" :key="photo.imgUrl">
      <img :src="imgKitEndpoint + `/tr:q-auto,w-400/` + photo.imgName" :alt="photo.altText" @click="selectPhoto(photo)">
    </li>
  </ul>

  <PhotoModal v-if="modalOpen" v-bind:selected-photo="selectedPhoto" @close="modalOpen = false"/>
</template>

<script setup>
  import PhotoModal from "@/components/PhotoModal";
  import {ref} from "vue";
  import {imgKitEndpoint} from "@/config";

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
import {baseUrl} from "@/config";

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
        const response = await axios.get(`${baseUrl}/api/photos`);
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

<style scoped>
  #imageList img {
    width: 20%;
  }
</style>