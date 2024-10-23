<template>
  <div class="height">
    <a href="#/realisations/onzen">
      <!-- <img
        src="../../assets/ImgGoogleUX-orange.webp"
        alt="Miniature Google UX orange"
      /> -->
      <img src="../../assets/img-prez-onzen2.jpg" alt="Miniature OnZen couleur" />
    </a>
  </div>
</template>
<style scoped>
img {
  /* max-width: 100%; */
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
}

.height {
  position: relative;
  height: 20rem;
  overflow: hidden;
}

.height img:nth-child(2) {
  position: absolute;
  /* right: 0; */
  opacity: 0;
  transition: opacity ease 0.4s;

  /* a reactiver */
  /* cursor: pointer; */
}

.height:hover img:nth-child(2) {
  opacity: 1;

  /* a reactiver */
  /* cursor: pointer; */
}

@media (min-width: 735px) {
  .height {
    height: 25rem;
  }
}

@media (min-width: 1135px) {
  img {
    object-position: top center;
  }

  .height {
    height: 100%;
    object-fit: cover;
  }
}
</style>