<script setup>
import ProjectsItem2 from "./ProjectsItem2.vue";
import ImgGoogleUX from "./icons/ImgGoogleUX.vue";
import ImgOnZen from "./icons/ImgOnZen.vue";
import ImgArtefacteur from "./icons/ImgArtefacteurCouverture.vue";
import ImgPortfolio1 from "./icons/ImgPortfolio1.vue";
import ImgLakson from "./icons/ImgLakson.vue";
// import ImgProjet2 from "./icons/ImgProjet2.vue";
// import ImgSuzuki from "./icons/ImgSuzuki.vue";
import Footer2 from "./Footer2.vue";
</script>


<template>
  <div id="reals">
    <div class="titre">
      <h2>RÉALISATIONS</h2>
    </div>
    <div class="flex-project">
      <div class="DivTitreH3">
        <h3>Projets UX/UI</h3>
      </div>

      <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
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
      </ProjectsItem2>

      <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
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
      </ProjectsItem2>

      <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
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
      </ProjectsItem2>
    </div>

    <div class="flex-project">
      <div class="DivTitreH3">
        <h3>Projets front-end</h3>
      </div>
      <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgPortfolio1 />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/Portfolio/"
            target="blank"
            class="link-text"
            >Première version de mon portfolio&nbsp;</a
          >
          <!-- <a href="https://14h02m10s.github.io/Portfolio/" target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link" /></a
        > -->
        </template>
        <div class="container-button">
          <a href="https://14h02m10s.github.io/Portfolio/" target="blank"
            ><button class="btn">Voir le projet</button></a
          >
        </div>
        <p>
          Voici la première version de mon portfolio créée avec <b>Vue.js</b>.
          Je n'ai pas eu le temps de le diffuser car dès sa finalisation, j'ai
          sollicité des avis auprès de mon entourage. Certains ont souligné que
          mon site était un peu trop "statique" et avait des airs un peu trop
          "print" (une déformation professionnelle, je suppose 🙃).
          <br /><br /><b
            >C'était mon premier projet responsive, conçu en adoptant une
            approche "mobile first".</b
          >
          Initialement, je souhaitais faire le parallèle avec mon cv, notamment
          en conservant la mise en forme des titres. Cependant, cela s'est avéré
          être plus un problème qu'une solution. La deuxième version de mon
          portfolio (le site que vous parcourez en ce moment) n'est pas parfait,
          bien sûr, mais j'espère que vous pourrez y reconnaître la
          détermination que j'y ai investie.
        </p>
      </ProjectsItem2>
      <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgLakson />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
            target="blank"
            class="link-text"
            >Reproduction d'un site vitrine&nbsp;</a
          >
          <!-- <a
            href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
            target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link" /></a
        > -->
        </template>
        <div class="container-button">
          <a
            href="https://14h02m10s.github.io/ExerciceCopieSiteResto/#/"
            target="blank"
            ><button class="btn">Voir le projet</button></a
          >
        </div>
        <p>
          J'ai commencé ce projet <b>Vue.js</b> à la fin de mon stage, en juin
          2023 et l'ai continué chez moi. L'objectif principal était de
          reproduire un site vitrine déjà existant. Mon choix s'est porté sur
          <a href="https://lakson.fr/" target="_blank" class="link-text"
            >le site du restaurant Lakson,</a
          >
          car il comprend
          <b
            >une barre de navigation, un pied de page, plusieurs pages, des
            boutons, et une galerie de photos</b
          >. <br /><br />
          Il reste encore des améliorations à apporter, car certaines parties
          étaient assez complexes lorsque j'ai entamé ce projet. Ainsi, les
          animations et la compatibilité avec les appareils de différentes
          tailles (responsive design) n'ont pas encore été implémentées. Mon
          prochain défi sera donc de rendre ce projet pleinement responsive (il
          est pour l'instant conseillé de le regarder sur un écran d'au moins
          1300&nbsp;px de large).
        </p>
      </ProjectsItem2>

      <!-- <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgProjet2 />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/TestVue-14h/"
            target="blank"
            class="link-text"
            >Divers exercices en HTML, CSS et JavaScript&nbsp;</a
          ><a href="https://14h02m10s.github.io/TestVue-14h/" target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link" /></a
        ></template>
        <p>
          J'ai décidé de me lancer dans la création de projets en <b>Vue.js</b>,
          afin de renforcer mes compétences en <b>JavaScript</b>. J'ai commencé
          par revisiter des exercices que j'avais fait lors de ma formation chez
          M2i. Par la suite, j'ai enrichi ce projet en y ajoutant divers
          éléments, tels qu'un
          <b
            >sélecteur de couleurs, la possibilité pour l'utilisateur d'ajouter
            des images, et enfin, j'ai reproduit une galerie de photos trouvée
            sur Dribbble</b
          >. <br /><br />En parallèle de ces ajouts, j'ai élaboré une
          présentation comprenant une barre de navigation, des titres, et j'ai
          également intégré un court texte de présentation. Jusqu'à présent,
          j'ai uniquement travaillé sur ce projet en mode desk, ce qui signifie
          qu'il est optimisé pour des écrans d'au moins 1200&nbsp;pixels de
          large. Dans l'avenir, j'aimerai le rendre responsive.
        </p>
      </ProjectsItem2> -->

      <!-- <ProjectsItem2 data-aos="fade-up" data-aos-duration="600">
        <template #image>
          <ImgSuzuki />
        </template>
        <template #sous-titre
          ><a
            href="https://14h02m10s.github.io/ExerciceNavbarEtCarrouselSuzuki/"
            target="blank"
            class="link-text"
            >Reproduction de la navbar et slider du site Suzuki&nbsp;</a
          ><a
            href="https://14h02m10s.github.io/ExerciceNavbarEtCarrouselSuzuki/"
            target="blank"
            ><img
              src="../assets/external-orange.svg"
              class="picto-external-link"
              alt="picto-external-link"
          /></a>
        </template>
        <p>
          Ce fut mon tout premier projet en <b>Vue.js</b>. Mon maître de stage
          m'avait donné pour mission de reproduire le menu de navigation et le
          slider du
          <a
            href="https://concession.suzuki.fr/la-rochelle"
            target="_blank"
            class="link-text"
            >site Suzuki concession.</a
          >
          <br /><br />
          Il est important de noter que rien n'est cliquable dans ce projet, car
          il s'agit d'une reproduction visuelle. De plus, il n'est pas encore
          pleinement responsive ; il est actuellement adapté aux écrans d'une
          largeur minimale de 960&nbsp;px.
        </p>
      </ProjectsItem2> -->
    </div>
    <!-- <div class="z-index"> -->
    <Footer2 />
    <!-- </div> -->
  </div>
</template>

<style scoped>
#reals {
  padding-top: 5rem;
  min-height: 100vh;
  /* background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%); */
  /* background-color: rgb(238 247 248); */
  /* background-color: rgb(247, 254, 255); */
  background: linear-gradient(to bottom, #b5cad1, #f7feff 70%, #f7feff 70%);
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
  color: #1c657c;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
h3 {
  color: #1c657c;
  font-size: 1.8rem;
  font-weight: 500;
}
.DivTitreH3 {
  width: 100%;
  text-align: center;
}
a {
  color: #e05900;
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
  box-shadow: inset 0 0 0 0 #e05900;
  padding: 0 0.15rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 700px 0 0 0 #e05900;
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
  border: 2px #e05900 solid;
  background: none;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: #e05900;
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