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
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>


<script>
import Header5 from "../src/components/Header5.vue";
import HomeView from "../src/views/HomeView.vue";
import PageRealisations from "../src/views/PageRealisations.vue";
import PageContact from "../src/views/PageContact.vue";

// import HelloWorld from './components/HelloWorld.vue'

const routes = {
  "/": HomeView,
  "/realisations": PageRealisations,
  "/contact": PageContact,
};

export default {
  name: "App",
  components: {
    Header5,
    HomeView,
    PageRealisations,
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