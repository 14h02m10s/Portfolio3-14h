<!-- <script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style> -->

<template>
  <div>
    <Header6 />
    <component :is="currentView" />
  </div>
</template>

<script>
import Header6 from "../src/components/Header6.vue";
import HomeView from "../src/views/HomeView.vue";
import PageRealisations from "../src/views/PageRealisations.vue";
import PageArtefacteurs from "../src/views/PageArtefacteurs.vue";
import PageOnZen from "../src/views/PageOnZen.vue";
import PageContact from "../src/views/PageContact.vue";

const routes = {
  "/": HomeView,
  "/realisations": PageRealisations,
  "/realisations/artefacteurs": PageArtefacteurs,
  "/realisations/onzen": PageOnZen,
  "/contact": PageContact,
};

export default {
  name: "App",
  components: {
    Header6,
    HomeView,
    PageRealisations,
    PageArtefacteurs,
    PageOnZen,
    PageContact,
  },
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || HomeView;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>