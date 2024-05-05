<script setup>
// import Footer from "./Footer.vue";
</script>
<script>
const remonte = () => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
};
</script>

<template>
  <div id="topArtef">
    <div class="titre">
      <h2>Artefacteurs</h2>
    </div>
    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="colonne1"></div>
      <div class="colonne2"></div>
      <div class="btn-return">
        <!-- <a href="#/realisations/artefacteurs/#topArtef"> -->
        <button class="btn-carre" @click="remonte">
          <span class="material-symbols-rounded">
            keyboard_double_arrow_up
          </span>
        </button>
        <!-- </a> -->
      </div>
    </div>
    <!-- <div class="z-index">
      <Footer />
    </div> -->
  </div>
</template>

<style scoped>
#topArtef {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* background: linear-gradient(to bottom, #1c657c, #1c4856 50%, #1c4856 50%); */
  background: #d6d6d6;
  width: 100%;
  position: relative;
  padding-top: 5.1rem;
  padding-bottom: 4.1rem;
  height: 100vh;
  min-height: 1050px;
}
/* #topArtef::after {
  content: "";
  background-image: url(../assets/fonds/fluffy-clouds-are-colored-by-a-setting-sun.png);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: cover;
} */
.titre {
  width: 100%;
  z-index: 1;
  color: #fff;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.3rem 3rem;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
button,
button::after {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

button {
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  border: 2px #fff solid;
  background: none;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #fff;
}
button::before,
button::after {
  border-radius: 2rem;
  background-color: #e05900;
  content: "";
  position: absolute;
  z-index: -1;
}
.btn-carre::before,
.btn::before,
.btn-carre::after,
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
/* .btn-carre::after,
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
} */
.btn-carre:hover::after,
.btn:hover::after {
  width: 100%;
}
p {
  /* font-size: 0.9rem; */
  font-weight: 500;
  margin-bottom: 0.7rem;
  color: #fff;
  text-align: center;
}

.btn-return {
  display: flex;
  justify-content: right;
  width: 100%;
  position: absolute;
  bottom: 5.5rem;
  right: 1.5rem;
}
.btn-carre {
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 4;
}
/* .container-except-titre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
} */
.container1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: fit-content;
  background-color: #f8f8f8;
}
.colonne1 {
  background-color: rgb(183, 183, 183);
  height: 200px;
  width: 100%;
}
.colonne2 {
  background-color: rgb(85, 85, 85);
  height: 3000px;
  width: 100%;
}
/* #contact:target {
  padding-top: 6rem;
  margin-top: -6rem;
} */
/* #contact:target {
  padding-top: 6.1rem;
  margin-top: 0rem;
} */
.z-index {
  z-index: 3;
  bottom: 0;
  position: absolute;
  width: 100%;
}
@media (min-width: 471px) {
  #topArtef {
    min-height: 1050px;
  }
  /* #contact:target {
    padding-top: 9.056rem;
    margin-top: 0rem;
  } */
}
@media (min-width: 768px) {
  #topArtef {
    padding-top: 7.5rem;
  }
  /* #contact:target {
    padding-top: 9.056rem;
    margin-top: 0rem;
  } */
}
@media (min-width: 1135px) {
  #topArtef {
    height: 100vh;
    /* height: 3000px; */
    padding-top: 6.7rem;
  }
  .container1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 100%;
    z-index: 1;
  }
  /* #contact:target {
    padding-top: 7rem;
    margin-top: -5rem;
  } */

  h2 {
    font-size: 2.7rem;
  }
}
</style>