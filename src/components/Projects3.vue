<script setup>
import ProjectsItem4 from "./ProjectsItem4.vue";
import ImgGoogleUX from "./icons/ImgGoogleUX.vue";
import ImgOnZen from "./icons/ImgOnZen.vue";
import ImgMukiz from "./icons/ImgMukiz.vue";
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

      <ProjectsItem4 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgMukiz />
        </template>

        <template #sous-titre>
          <span>Ux</span> <br />
          <a href="#/realisations/mukiz" class="link-text">Onboarding Mukiz&nbsp;</a>
        </template>
        <div class="container-button">
          <a href="#/realisations/mukiz"><button class="btn">Voir le projet</button></a>
        </div>
        <p>
          Mukiz est une <b>application de blind test interactif</b>, qui réunit
          des milliers de joueurs quotidiennement.
          L'objectif était comprendre <b>pourquoi certains utilisateurs ne démarraient pas leur première
            partie</b> lors de leur première visite sur l'application.
        </p>
      </ProjectsItem4>

      <div class="trait"></div>

      <ProjectsItem4 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgGoogleUX />
        </template>
        <template #sous-titre>
          <span>Ux</span> <br />
          Certification Google UX&nbsp;</template>
        <div class="container-button">
          <!-- <a href=""> -->
          <button class="btn-disable">En cours d'acquisition</button>
          <!-- </a> -->
        </div>
        <p>
          Je passe actuellement la certification Google UX afin de continuer à
          <b>approfondir mes compétences en design centré utilisateur.</b><br /><br />
          Ce programme compte + de 200 heures de cours en totale autonomie et
          j'applique toutes les méthodes UX en
          <b>travaillant sur la conception d'une application de carte de café</b>. Cela me permet de perfectionner
          chaque
          étape du processus UX.
        </p>
      </ProjectsItem4>

      <div class="trait"></div>

      <ProjectsItem4 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgArtefacteur />
        </template>
        <template #sous-titre>
          <span>Ux</span><span>Ui</span> <br />
          <a href="#/realisations/artefacteurs" class="link-text">Plateforme des Artéf'acteurs&nbsp;</a>
          <!-- <a href="#/realisations/artefacteurs"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link"
          /></a> -->
        </template>
        <div class="container-button">
          <a href="#/realisations/artefacteurs"><button class="btn">Voir le projet</button></a>
        </div>
        <p>
          La Manufacture des Artéf'acteurs, une association réunissant des
          artisans d'art, avait besoin d'une plateforme pour
          <b>favoriser les échanges entre artisans et soutenir leurs
            activités</b>. <br /><br />
          Nous avons appliqué des méthodes UX comme les
          <b>entretiens utilisateurs</b> pour identifier leurs besoins, la
          <b>création de personas</b> pour définir le profil des artisans, des
          <b>diagrammes d'affinités</b> pour classer les informations récupérées
          en entretien, des <b>ateliers d'idéation</b> pour générer de nouvelles
          idées, du <b>maquettage</b> pour faire prendre vie au projet et enfin
          des <b>tests utilisateurs synchrones et asynchrones</b> pour évaluer
          les points de friction de nos premières maquettes.
        </p>
      </ProjectsItem4>

      <div class="trait"></div>

      <ProjectsItem4 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgOnZen />
        </template>

        <template #sous-titre>
          <span>Ui</span><span>Ux</span><span>Html/Css</span> <br />
          <a href="#/realisations/onzen" class="link-text">Refonte de la plateforme On-Zen&nbsp;</a>
        </template>
        <div class="container-button">
          <a href="#/realisations/onzen"><button class="btn">Voir le projet</button></a>
        </div>
        <p>
          <b>On-Zen, plateforme dédiée à la prise de rendez-vous en ligne,</b> met en relation praticiens et clients
          tout
          <b>sensibilisant le public aux médecines complémentaires</b>. Elle fournit également aux professionnels des
          outils
          essentiels pour la
          gestion et
          le développement de leur activité.
          <br>
          <br>
          La plateforme n'était pas conçue en responsive et manquait également de cohérence graphique. <b>Ma
            mission
            était de la rendre plus attrayante, rassurante et facile à utiliser.</b>
        </p>
      </ProjectsItem4>
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
  align-items: center;
  /* margin: 0.5rem 1rem 0rem 1rem; */
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
  padding: 0 0 1rem 0;
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

/* .link-text {
  font-weight: 700;
  box-shadow: inset 0 0 0 0 #353051;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 700px 0 0 0 #353051;
} */
.link-text {
  font-weight: 700;
  background: linear-gradient(0deg, #353051 0%, #353051 100%);
  background-size: 0% 100%;
  /* Taille initiale de l'arrière-plan en largeur */
  background-position: 0 100%;
  /* Placé en bas */
  background-repeat: no-repeat;
  /* Pas de répétition de l'arrière-plan */
  transition: background-size 0.3s ease-in-out, color 0.3s ease-in-out;
}

.link-text:hover {
  color: #fff;
  background-size: 100% 100%;
  /* L'arrière-plan s'agrandit progressivement pour couvrir toute la largeur */
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
  margin: 0.7rem 0;
}

button,
button::after {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

button {
  padding: 0.7rem 1.6rem;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  /* border: 2px #353051 solid; */
  /* background: none; */
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #353051;
  border: 2px #39335a solid;
  /* background: none; */
  background-color: #353051;
  background-color: #1a1e36;
}

button::before,
button::after {
  border-radius: 2rem;
  /* background-color: #1c657c; */
  background-color: #39335a;

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

span {
  background-color: #353051;
  background-color: #656ea6;
  background-color: #979fd9;
  border-radius: 50px;
  margin: 0 0.7rem 0 0;
  padding: 0.2rem 0.8rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
}

.trait {
  /* border: 0.5px solid black; */
  width: 100%;
  margin: 2rem 0;
}

@media (min-width: 471px) {}

@media (min-width: 768px) {
  #reals {
    padding-top: 7.5rem;
  }

  /* .container-button {
    margin: 0.5rem 0;
  } */
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
    /* changement ci dessous avec les items qui prennent tout la largeur */
    max-width: 100rem;
  }

  h2 {
    font-size: 2.7rem;
    padding: 3rem 0;
  }

  p {
    font-size: 1rem;
  }

  .trait {
    margin: 0.2rem 0;
  }
}

@media (min-width: 1440px) {
  .flex-project {
    padding: 0 1rem 2rem 1rem;
    /* margin: 0.5rem 0rem 0rem 0rem; */
    width: 100%;
  }
}
</style>