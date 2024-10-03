<script setup>
import ProjectsItem3 from "./ProjectsItem3.vue";
import ImgGoogleUX from "./icons/ImgGoogleUX.vue";
import ImgOnZen from "./icons/ImgOnZen.vue";
import ImgArtefacteur from "./icons/ImgArtefacteurCouverture.vue";
// import Footer2 from "./Footer2.vue";
</script>


<template>
  <div id="reals">
    <div class="titre">
      <h2>RÉALISATIONS</h2>
    </div>
    <div class="flex-project">
      <!-- <div class="DivTitreH3">
        <h3>Projets UX/UI</h3>
      </div> -->

      <ProjectsItem3 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgOnZen />
        </template>
        <template #sous-titre
          ><a href="#/realisations/onzen" class="link-text"
            >Refonte de la plateforme On-Zen&nbsp;</a
          >
        </template>
        <div class="container-button">
          <a href="#/realisations/onzen"
            ><button class="btn">Voir le projet</button></a
          >
        </div>
        <p>
          On-Zen est une plateforme dédiée à la
          <b>sensibilisation du grand public aux médecines complémentaires</b>
          et à la <b>mise en relation entre praticiens et clients</b> par la
          prise de rendez-vous. Elle propose également aux professionnels du
          bien-être divers outils pour faciliter la gestion de leur activité et
          accroître leur visibilité. <br /><br />
          Une première version du site avait été lancée au début de l'activité
          de la start up mais elle n’était ni responsive ni cohérente sur le
          plan graphique.
          <b>J'avais donc pour mission de donner un nouveau souffle au site.</b>
        </p>
      </ProjectsItem3>

      <ProjectsItem3 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgGoogleUX />
        </template>
        <template #sous-titre>Certification Google UX&nbsp; </template>
        <div class="container-button">
          <!-- <a href=""> -->
          <button class="btn-disable">En cours d'acquisition</button>
          <!-- </a> -->
        </div>
        <p>
          Suite à ma formation chez UX France, j'ai décidé de passer la
          certification Google UX afin de
          <b
            >continuer non seulement mon apprentissage en UX, mais aussi
            continuer à manipuler Figma et à maquetter</b
          >. <br /><br />
          Cette certification se déroule entièrement en ligne et
          <b>en autonomie</b>. Le programme dure en théorie
          <b>+ de 200 heures</b> et est découpé en 7 parties. Je suis
          actuellement en train de finir la 3e partie. Mon projet portera sur la
          conception d'une application de prévisualisation d'une carte de café.
        </p>
      </ProjectsItem3>

      <ProjectsItem3 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgArtefacteur />
        </template>
        <template #sous-titre
          ><a href="#/realisations/artefacteurs" class="link-text"
            >Projet des Artéf'acteurs&nbsp;</a
          >
          <!-- <a href="#/realisations/artefacteurs"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link"
          /></a> -->
        </template>
        <div class="container-button">
          <a href="#/realisations/artefacteurs"
            ><button class="btn">Voir le projet</button></a
          >
        </div>
        <p>
          Le projet de la manufacture des Artéf'acteurs a été mené durant ma
          <b>formation chez UX France</b>, en équipe de 2. <br /><br />
          L'association de la Manufacture des artef'acteurs regroupe des
          artisans d'art de l'est de la France. Le but de cette association est
          de mettre en relation les artisans et de les aider à développer leurs
          activités.
        </p>
      </ProjectsItem3>
    </div>

    <!-- <Footer2 /> -->
  </div>
</template>

<style scoped>
#reals {
  padding-top: 5rem;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  min-width: none;
}
#reals:target {
  padding-top: 6.1rem;
  margin-top: -3.1rem;
  /* padding-top: 6.1rem;
  margin-top: -6.1rem; */
}
template {
  margin: 0;
  padding: 0;
}
.flex-project {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 0.5rem 1rem 0rem 1rem;
  padding-bottom: 2rem;
}
.titre {
  width: 100%;
  z-index: 1;
  color: #fff;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding: 0.3rem 3rem;
  color: #353051;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
h3 {
  color: #353051;
  font-size: 1.8rem;
  font-weight: 500;
}
.DivTitreH3 {
  width: 100%;
  text-align: center;
}
a {
  color: #353051;
  margin: 0;
  padding: 0;
  width: 100%;
}
p {
  font-size: 0.9rem;
  margin-block-start: 0;
  margin-block-end: 0;
}
.link-text {
  font-weight: 700;
  box-shadow: inset 0 0 0 0 #353051;
  padding: 0 0.15rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 700px 0 0 0 #353051;
}
.picto-external-link {
  transform: translateY(0.2rem);
  cursor: pointer;
}
.z-index {
  /* width: fit-content; */
}
.container-button {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0 0 0.7rem 0;
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
  color: #fff;
  font-size: 1.1rem;
  border: 2px #353051 solid;
  background: none;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #353051;
}
button::before,
button::after {
  border-radius: 2rem;
  background-color: #1c657c;
  content: "";
  position: absolute;
  z-index: -1;
}
.btn::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn:hover::after {
  width: 100%;
}
.btn-disable {
  cursor: not-allowed;
  background-color: gray;
}
@media (min-width: 471px) {
}
@media (min-width: 768px) {
  #reals {
    padding-top: 7.5rem;
  }
  .container-button {
    margin: 0.5rem 0;
  }
}
@media (min-width: 1135px) {
  #reals {
    padding-top: 5.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
  .flex-project {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
  }
  h2 {
    font-size: 2.7rem;
    padding: 0.3rem 3rem;
  }
  p {
    font-size: 1rem;
  }
}
@media (min-width: 1440px) {
  .flex-project {
    padding: 0 1rem 2rem 1rem;
    margin: 0.5rem 0rem 0rem 0rem;
    width: 100%;
  }
}
</style>