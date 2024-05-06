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
    <Header5 />
    <component :is="currentView" />
  </div>
</template>

<script>
import Header5 from "../src/components/Header5.vue";
import HomeView from "../src/views/HomeView.vue";
import PageRealisations from "../src/views/PageRealisations.vue";
import PageArtefacteurs from "../src/views/PageArtefacteurs.vue";
import PageContact from "../src/views/PageContact.vue";

const routes = {
  "/": HomeView,
  "/realisations": PageRealisations,
  "/realisations/artefacteurs": PageArtefacteurs,
  "/contact": PageContact,
};

export default {
  name: "App",
  components: {
    Header5,
    HomeView,
    PageRealisations,
    PageArtefacteurs,
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