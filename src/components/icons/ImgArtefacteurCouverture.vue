<template>
  <div class="height">
    <a href="#/realisations/artefacteurs">
      <!-- <img
        src="../../assets/ImgArtefacteurs-orange2.jpg"
        alt="Miniature Artefacteurs orange"
      /> -->
      <img
        src="../../assets/img-prez-artefacteurs.jpg"
        alt="Miniature Artefacteurs couleur"
      />
    </a>
  </div>
</template>
<style scoped>
img {
  /* max-width: 100%; */
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
}
.height {
  position: relative;
  height: 20rem;
  overflow: hidden;
}
/* .height img:nth-child(2) {
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity ease 0.4s;
  cursor: pointer;
  object-position: center center;
}
.height:hover img:nth-child(2) {
  opacity: 1;
  cursor: pointer;
} */
@media (min-width: 735px) {
  .height {
    height: 25rem;
  }
}
@media (min-width: 1135px) {
  img {
    /* height: 100%;
    width: fit-content; */
    /* width: 100%; */
    object-position: top center;
  }
  .height {
    height: 100%;
    object-fit: cover;
  }
}
</style>