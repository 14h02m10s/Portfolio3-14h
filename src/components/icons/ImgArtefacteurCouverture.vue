<template>
  <div class="height">
    <a href="#/realisations/artefacteurs">
      <img
        src="../../assets/ImgArtefacteurs-orange.jpg"
        alt="Miniature Artefacteurs orange"
      />
      <img
        src="../../assets/ImgArtefacteurs-coul.jpg"
        alt="Miniature Artefacteurs coul"
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
  object-position: top left;
}
.height {
  position: relative;
  height: 15rem;
  overflow: hidden;
}
.height img:nth-child(2) {
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity ease 0.4s;
  cursor: pointer;
}
.height:hover img:nth-child(2) {
  opacity: 1;
  cursor: pointer;
}
</style>