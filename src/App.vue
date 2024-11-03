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
    <Header7 />
    <component :is="currentView" />
  </div>
</template>

<script>
import Header7 from "../src/components/Header7.vue";
import HomeView from "../src/views/HomeView.vue";
import PageRealisations from "../src/views/PageRealisations.vue";
import PageArtefacteurs from "../src/views/PageArtefacteurs.vue";
import PageOnZen from "../src/views/PageOnZen.vue";
import PageMukiz from "../src/views/PageMukiz.vue";
import PageGoogleUX from "../src/views/PageGoogleUX.vue";
import PageContact from "../src/views/PageContact.vue";

const routes = {
  "/": HomeView,
  "/realisations": PageRealisations,
  "/realisations/artefacteurs": PageArtefacteurs,
  "/realisations/onzen": PageOnZen,
  "/realisations/mukiz": PageMukiz,
  "/realisations/googleux": PageGoogleUX,
  "/contact": PageContact,
};

export default {
  name: "App",
  components: {
    Header7,
    HomeView,
    PageRealisations,
    PageArtefacteurs,
    PageOnZen,
    PageMukiz,
    PageGoogleUX,
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