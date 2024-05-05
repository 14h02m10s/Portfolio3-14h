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
      <h2>L'association des Artefacteurs</h2>
    </div>

    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="titre-phase"><h3>Remise en contexte</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            L'association des Artef'acteurs regroupe des artisans d'art de la
            région de Belfort. Ils ont entre 25 et 55 ans et ce sont des
            personnes qui travaillent seules. Le but de l'association est de
            mettre en relation ses artisans afin de les faire sortir de
            l'isolement professionnel et aussi les aider à développer leurs
            activités en regroupant des informations utiles (tels que les
            fournisseurs, salons, marchés...). <br /><br />Pour l'instant
            l'association dispose d'un site web (mais celui-ci n'est pas mis à
            jour et il avait surtout pour but de faire la promotion/vendre des
            articles des artisans), une page facebook tenue par la fondatrice de
            l'association, un google drive pour s'échanger des documents et un
            groupe what'app pour discuter.
          </p>
        </div>
        <div class="colonne2">
          <img
            class="contrainte-img"
            src="../assets/logoArtefacteurs.jpg"
            alt="les différentes phases de l'ux design"
          />
        </div>
      </div>

      <div class="titre-phase"><h3>L'UX design</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>L'UX design est décomposé en 6 phases :</p>
          <ol>
            <li>
              <b>La planification</b> sert à comprendre les besoins du client et
              réfléchir à qui est l’utilisateur final. On définit une
              problématique.
            </li>
            <li>
              <b>L'exploration</b> sert à comprendre qui sont les utilisateurs
              finaux.
            </li>
            <li>
              <b>L'idéation</b> permet de brainstormer, avec des utilisateurs,
              et de trouver des solutions à notre problématique.
            </li>
            <li>
              <b>La génération</b> c'est le moment où le projet prend vie à
              travers des prototypes.
            </li>
            <li>
              <b>L'évaluation</b> permet de se rendre compte, en faisant tester
              le prototype à des utilisateurs, de ce qui va et surtout de ce qui
              ne va pas.
            </li>
            <li>
              <b>L'itération</b>, c'est le moment où on corrige ce qui ne va
              pas, on peut recommencer le processus à partir de la phase
              d'exploration, d'idéation ou de génération, selon les besoins. De
              plus, plusieurs itérations peuvent avoir lieu.
            </li>
          </ol>
        </div>
        <div class="colonne2">
          <img
            class="contrainte-img"
            src="../assets/uxDesign.jpg"
            alt="les différentes phases de l'ux design"
          />
        </div>
      </div>

      <div class="titre-phase"><h3>Durant la phase de Planification</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Avant toute chose, nous avons établi un plan d'action dans Notion
            pour pouvoir avoir une vision d'ensemble, mais cependant assez
            détaillée, du chemin à parcourir. Puis, nous avons rencontré la
            fondatrice de l'association des Artef'acteurs, qui nous a exposé ce
            qui existait actuellement, et ce qu'elle voudrait pouvoir offrir aux
            artisans de son association : une plateforme web.
            <br /><br />Suite à cet entretien nous avons reformulé et synthétisé
            sa demande. Nous avons utilisé la méthode des 5 pourquoi pour
            définir la problématique globale à laquelle nous allions devoir
            répondre. Celle-ci était "Comment les artisans peuvent-ils
            s'entraider à travers la plateforme ?". <br /><br />
            Nous nous sommes ensuite intéressé de plus près aux utilisateurs :
            les artisans du collectif des Artéf'acteurs. Nous avons donc créé
            des personas hypothétiques en nous aidant de cartes UX (qui
            synthétisent quels sont les besoins psychologiques fondamentaux des
            êtres humains en 7 grandes catégories) de manière à entrer dans
            l'empathie plus facilement.
          </p>
        </div>
        <div class="colonne2">
          <img
            class="contrainte-img"
            src="../assets/Capture d’écran 2024-04-15 à 10.18.25.png"
            alt=""
          />
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'exploration</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Durant cette phase nous avons pu rencontrer 2 artisans du collectif
            des artef'acteurs en visioconférence. Au préalable nous avons donc
            du préparer ces entretiens en rédigeant une quinzaine de questions
            que nous souhiations leur poser. Les entretiens ont duré 30 minutes
            chacun, et nous avons prié nos interlocutrices de dire tout ce qui
            leur passait par la tête afin de se faire une idée plus juste et
            précise de qui sont les artisans des artéf'acteurs. <br /><br />
            Une fois les entretiens terminés on a écrit sur des post-its tout ce
            qui avait été dit durant les entretiens et nous avons classé ces
            post-it par catégories, ce qui nous a donc donné un diagramme
            d'affinités. Grâce à ce diagramme, on a pu retrvailler notre persona
            et aussi y inclure un verbatim.
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/Capture d’écran 2024-04-15 à 14.35.20.png"
            alt="fb artefacteurs"
          />
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'idéation</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Nous avons tout d'abord réalisé un brainstorming avec ma partenaire
            afin d'imaginer quelles pourraient être les fonctionnalités que
            pourrait comporter la plateforme des Artéf'acteurs. Puis nous avons
            préparé l'atelier d'idéation où nous allions recevoir 2
            participantes en visioconférence, sur Figjam.<br /><br />

            Le but de l'atelier est de stimuler la créativité des participants
            en leur exposant au préalable le brief, notre problématique, et
            notre persona afin qu'ils puissent se glisser dans la peau d'un
            artisan. Nous avons donc incité les 2 participants à exprimer toutes
            leurs idées, mêmes les plus saugrenues et de les noter. Nous leur
            avons ensuite exposé nos idées et leur avons demandé de les
            noter.<br /><br />
            Nous avons ensuite fait la synthèse des idées et nous avons élaboré
            l’arborescence du projet ainsi que le userflow.
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/Capture d’écran 2024-04-15 à 14.35.20.png"
            alt="brainstorming"
          />
        </div>
      </div>
    </div>
    <div class="btn-return">
      <!-- <a href="#/realisations/artefacteurs/#topArtef"> -->
      <button class="btn-carre" @click="remonte">
        <span class="material-symbols-rounded"> keyboard_double_arrow_up </span>
      </button>
      <!-- </a> -->
    </div>
  </div>
  <!-- <div class="z-index">
      <Footer />
    </div> -->
</template>

<style scoped>
#topArtef {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%);
  /* background: #855252; */
  width: 100%;
  position: relative;
  padding-top: 5.1rem;
  padding-bottom: 6.1rem;
  height: 100%;
  min-height: 100vh;
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
  font-weight: 600;
  padding: 0.3rem 3rem;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  letter-spacing: 0.05rem;
}
p,
ol {
  font-weight: 500;
  margin: 1rem;
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
  font-weight: 500;
  margin: 1rem;
}
.btn-return {
  display: flex;
  justify-content: right;
  width: 100%;
  position: absolute;
  bottom: 2rem;
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
.container1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
  height: fit-content;
  background-color: #b9cfd4;
  padding: 0rem 2rem 3rem 2rem;
}
.titre-phase {
  padding: 3rem 0 1rem 0;
}
.bloc-phase {
  /* border: red 1px solid; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.colonne1 {
  background-color: #fff;
  height: fit-content;
  width: 100%;
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
}
.colonne2 {
  background-color: rgb(85, 85, 85);
  /* height: fit-content; */
  width: 100%;
  /* border: blue 1px solid; */
  padding-bottom: 0;
  height: fit-content;
  object-fit: contain;
}
img {
  max-width: 100%;
  height: 100%;
  /* object-fit: contain; */
}
.z-index {
  z-index: 3;
  bottom: 0;
  position: absolute;
  width: 100%;
}
@media (min-width: 471px) {
  /* #topArtef {
    min-height: 1050px;
  } */
}
@media (min-width: 768px) {
  #topArtef {
    padding-top: 7.5rem;
  }
}
@media (min-width: 1135px) {
  #topArtef {
    height: 100%;
    min-height: 100vh;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }
  .container1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 85%;
    z-index: 1;
    padding: 0rem 3rem 3rem 3rem;
  }
  h2 {
    font-size: 2.7rem;
  }
  .bloc-phase {
    display: flex;
    flex-direction: row;
  }
  .colonne1 {
    width: 40%;
  }
  .colonne2 {
    width: 60%;
  }
  /* img {
    max-width: 100%;
    height: 100%;
  } */
}
</style>
