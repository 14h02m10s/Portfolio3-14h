<script setup>
import Footer2 from "./Footer2.vue";

import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});

onBeforeUnmount(() => {
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
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
  <div id="topPage">
    <h2>- Projet en cours -</h2>
    <br>
    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="container-btn-retour">
        <a href="javascript:history.back()">
          <button class="btn no-box-shadow slim-button">Retour</button>
        </a>
      </div>
      <div class="colonne2">
        <img class="maxHeightimg" src="../assets/banniere-googleUX2.jpg" alt="banniere Google ux" />
      </div>


      <div class="bloc-phase" id="contexte">
        <div class="titre-phase">
          <h3>Remise en contexte</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              J'ai décidé de suivre la formation Google UX qui se déroule en ligne, en <b>totale autonomie</b>, afin
              d'approfondir mes connaissances en UX design. Ce programme compte <b>+ de 200 heures de cours</b> et
              j'applique toutes les méthodes UX en travaillant sur la conception d'une <b>application de
                prévisualisation de carte pour un café en plein air</b>.
            </p>
          </div>
        </div>
      </div>


      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Empathie et idéation</h3>
        </div>

        <div class="colonne1">
          <div class="border-left">
            <p>
              Pour ce projet d'application de carte de café en plein air, j'ai entamé la phase d'empathie en réalisant
              des <b>interviews pour comprendre les attentes des utilisateurs</b>. Simultanément, j'ai exploré
              des idées en temps réel, en intégrant leurs retours dans le processus d’idéation au fur et à mesure. Cette
              approche m'a permis de <b>saisir des besoins</b> comme la facilité d'accès aux informations sur les plats
              et boissons, <b>et aussi des frustrations</b> comme la pénurie de certains plats pourtant inscrits sur la
              carte ou encore avoir la mauvaise surprise d'avoir un ingrédient détesté dans son plat, tout en commençant
              à imaginer des solutions créatives pour y répondre. À partir de ces données, j'ai développé des
              <b>personas</b> qui capturent les motivations des utilisateurs et défini clairement les problématiques à
              résoudre.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/personna-google-UX-1.jpg" alt="Persona 1 Alicia" />
          <h5>Persona 1 Alicia</h5>
        </div>

        <div class="colonne2">
          <img src="../assets/personna-google-UX-2.jpg" alt="Persona 2 Victor" />
          <h5>Persona 2 Victor</h5>
        </div>

        <div class="colonne1">
          <div class="border-left">
            <p>
              Suite aux interviews et à l’idéation, j'ai approfondi le processus en rédigeant des user stories pour
              <b>capter les scénarios d'utilisation clé de l'application</b>. Cela m'a permis de définir des énoncés de
              problèmes spécifiques et de formuler des hypothèses de design, orientées vers l'amélioration de
              l'expérience utilisateur. Ces étapes ont été essentielles pour clarifier <b>les attentes et les
                motivations</b>
              des utilisateurs. Enfin, j'ai établi un objectif clair pour le persona principal, afin de guider le design
              et de m'assurer que l'application réponde directement aux besoins prioritaires identifiés. J'ai également
              fait un audit concurrentiel pour chercher quelles pouvaient être les bonnes idées et noter ce qui
              fonctionne moins bien.
            </p>
            <p><b>User story du persona Victor</b></p>
            <div class="paragraphe-mis-en-avant">
              <p>"En tant que père de famille, je veux que la carte liste tous les ingrédients, afin que je puisse
                trouver
                un plat qui me convienne vraiment et d’éviter des aliments problématiques pour mon fils (allergique aux
                noix)."</p>
            </div>
            <!-- <p>"En tant que père de famille, je veux que la carte liste tous les ingrédients, afin que je puisse trouver
              un plat qui me convienne vraiment et d’éviter des aliments problématiques pour mon fils (allergique aux
              noix)."</p> -->
            <p><b>Énoncé de problème pour le persona Victor</b></p>
            <!-- <p>Victor est un père de famille exigeant qui a besoin de commander des plats particuliers pour chacun des
              membres de sa famille parce qu’ils sont soit exigeants sur la qualité de la nourriture, soit végétarien,
              soit allergiques.</p> -->
            <div class="paragraphe-mis-en-avant">
              <p>Victor est un père de famille exigeant qui a besoin de commander des plats particuliers pour chacun des
                membres de sa famille parce qu’ils sont soit exigeants sur la qualité de la nourriture, soit végétarien,
                soit allergiques.</p>
            </div>
            <p><b>Hypothèse pour le persona Victor</b></p>
            <!-- <p>Si Victor utilise l’application du café,
              alors il pourra plus facilement voir quels sont les caractéristiques des différents plats proposés à la
              carte</p> -->
            <div class="paragraphe-mis-en-avant">
              <p>Si Victor utilise l’application du café,
                alors il pourra plus facilement voir quels sont les caractéristiques des différents plats proposés à la
                carte.</p>
            </div>
            <p><b>Énoncé d'objectif pour le persona Victor</b></p>
            <!-- <p>Notre application de prévisualisation de carte pour un café, permettra aux utilisateurs de savoir de quoi
              sont composés les plats et boissons précisément, ce qui aura un impact sur la satisfaction des clients
              particulièrement exigeants en leur permettant de faire des choix éclairés sans avoir à demander au
              serveur. Nous mesurerons l'efficacité en questionnant les utilisateurs sur leur satisfaction de la carte.
            </p> -->
            <div class="paragraphe-mis-en-avant">
              <p>Notre application de prévisualisation de carte pour un café, permettra aux utilisateurs de savoir de
                quoi
                sont composés les plats et boissons précisément, ce qui aura un impact sur la satisfaction des clients
                particulièrement exigeants en leur permettant de faire des choix éclairés sans avoir à demander au
                serveur. Nous mesurerons l'efficacité en questionnant les utilisateurs sur leur satisfaction de la
                carte.</p>
            </div>
          </div>
        </div>
      </div>


      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Création de wireframes et d'un prototype basse fidélité</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Dans cette étape, j'ai créé les <b>premiers wireframes basse-fidélité</b> pour l'application de
              prévisualisation de carte de café, en commençant par des <b>esquisses sur papier</b> pour explorer
              différentes idées de mise en page et de navigation. <b>Ces wireframes papier m'ont permis de tester
                rapidement plusieurs concepts</b>, d'identifier des éléments clé à intégrer et de visualiser le
              parcours utilisateur.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/googleUX-wireframes.jpg" alt="wireframe-papier-googleUX" />
          <h5>Quelques wireframes papier</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>Ensuite, j'ai développé une version numérique de ces wireframes pour affiner la
              structure de l'application, en créant un <b>prototype basse-fidélité</b>. Cette version numérique m'a
              permis de vérifier l'agencement des écrans et la fluidité de l'expérience utilisateur, <b>sans me
                concentrer encore sur les aspects visuels détaillés</b>.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/googleUX-proto1.jpg" alt="wireframe-numeriques-googleUX" />
          <h5>Quelques wireframes numériques</h5>
        </div>
        <div class="colonne1">
          <a class="link-text" target="_blank"
            href="https://www.figma.com/proto/7LHnmnFfFq6aklrhccsFfj/wireframes-mon-app-V1?page-id=375%3A1707&node-id=375-1708&node-type=frame&viewport=798%2C866%2C0.19&t=BMt2T43Zb47w7L8Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=375%3A1708">
            >> Tester le prototype basse fidélité Figma</a>
        </div>
      </div>


      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Entretiens et modifications des maquettes</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Pour préparer les tests utilisateurs de mes prototypes sur Figma, j'ai élaboré un <b>plan de recherche</b>
              clair,
              définissant les objectifs, les questions d'ergonomie et les scénarios de test. Cette approche m'a permis
              de recueillir des retours précieux, que j'ai <b>synthétisés en insights</b>. Ceux-ci ont mis en
              lumière les ajustements nécessaires et m'ont aidée à identifier des <b>axes d'amélioration</b> pour rendre
              l'application plus intuitive et adaptée aux attentes des utilisateurs.</p>
          </div>
        </div>

        <div class="colonne2">
          <img src="../assets/insights-google-ux.jpg" alt="Mes insights triés par ordre de priorité" />
          <h5>Mes insights triés par ordre de priorité</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              J'ai donc pu ajuster mes maquettes en fonction des axes d'amélioration identifiés lors des tests
              utilisateurs, afin de mieux répondre aux besoins et aux attentes relevés.</p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/googleUX-proto2.jpg" alt="Aperçu des modifications" />
          <h5>Aperçu des modifications</h5>
        </div>


      </div>


      <div class="bloc-phase">
        <!-- <div class="titre-phase">
          <h3>dernier paragraphe</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              bla
            </p>
          </div>
        </div> -->

        <div class="merci">
          <p>
            Page en cours de création... la suite bientôt
          </p>
        </div>
        <div class="liens-autres-projets">
          <a href="#/realisations/mukiz">
            <button class="btn no-box-shadow">Voir le projet Mukiz</button>
          </a>
          <a href="#/realisations/artefacteurs">
            <button class="btn no-box-shadow">Voir le projet des
              Artéf'acteurs</button>
          </a>
          <a href="#/realisations/onzen">
            <button class="btn no-box-shadow">Voir le projet On-Zen</button>
          </a>
        </div>
      </div>
    </div>

    <div class="btn-return">
      <button class="btn-rond" @click="remonte">
        <span class="material-symbols-rounded"> keyboard_double_arrow_up </span>
      </button>
    </div>

  </div>
  <Footer2 />
</template>

<style scoped>
#topPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;
  position: relative;
  padding-top: 5.1rem;
  padding-bottom: 6.1rem;
  height: 100%;
  min-height: 100vh;
}

.titre {
  width: 100%;
  z-index: 1;
  color: #353051;
}

h2 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  padding: 0.3rem 3rem;
  display: flex;
  justify-content: center;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  text-align: center;
}

h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
  display: inline;
}

.titre-phase {
  margin-top: 1rem;
  padding: 0 2rem;
  box-shadow: inset 1.2rem 0em #353051;
}

h5 {
  text-align: right;
  padding: 0.4rem 1.5rem 0 0;
  font-size: 1rem;
  font-style: italic;
  color: #676767;
  font-weight: 600;
}

p,
ul,
ol {
  font-weight: 500;
  padding: 0;
}

ul,
ol {
  padding: 0 0 0 2rem;
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
  border: 2px #39335a solid;
  /* background-color: #353051; */
  background-color: #1a1e36;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
  box-shadow: -0.2rem -0.2rem #656ea6, 0.4rem 0.4rem 0 #1c657c;
}

button::before,
button::after {
  border-radius: 2rem;
  background-color: #39335a;
  content: "";
  position: absolute;
  z-index: -1;
}

.btn-rond::before,
.btn::before,
.btn-rond::after,
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}

.btn-rond:hover::after,
.btn:hover::after {
  width: 100%;
}

.btn-return {
  display: flex;
  justify-content: right;
  width: 100%;
  position: absolute;
  bottom: 2rem;
  right: 1.5rem;
}

.btn-rond {
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
}

.bloc-phase {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.colonne1 {
  background-color: #fff;
  height: fit-content;
  width: 100%;
  /* box-shadow: rgba(0, 0, 0, 0.09) 0.3rem 0.3rem 0.5rem; */
  /* box-shadow: rgba(57, 51, 90, 0.2) 0.3rem 0.3rem 0.5rem; */
  /* padding: 0.2rem 0.5rem; */
  padding: 1rem 1.5rem;
}

/* .border-left {
  border-left: #353051 10px solid;
  margin: 0 2rem;
} */

.colonne2 {
  /* height: fit-content; */
  width: 100%;
  padding-bottom: 0;
  height: fit-content;
  /* object-fit: contain; */
  display: flex;
  justify-content: center;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.2) 0rem 0rem 0.8rem;
  margin: 0.5rem 0;
}

/* .maxHeightimg {
  max-height: 400px;
} */

.citation {
  /* background: linear-gradient(303deg, rgba(26, 30, 54, 1) 60%, rgba(53, 48, 81, 1) 96%); */
  background: rgb(245, 247, 255);
  margin: 1rem 0rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: inset 0.1rem 0.3rem rgb(34, 40, 65);
  border: 1px #353051 solid;
  box-shadow: -0.2rem -0.2rem #656ea6, 0.4rem 0.4rem 0 rgb(34, 40, 65);
}

.citation p {
  margin: 0;
  padding: 0;
  /* color: #fff; */
  font-weight: 400;
  font-size: 1.2rem;
  font-style: italic;
}

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
  font-size: 1.3rem;
  text-decoration: underline;
}

.link-text:hover {
  color: #fff;
  background-size: 100% 100%;
  /* L'arrière-plan s'agrandit progressivement pour couvrir toute la largeur */
}

.merci {
  background: rgb(245, 247, 255);
  /* background: linear-gradient(303deg, rgb(245, 247, 255) 50%, #353051 100%); */
  /* border: #1a1e36 1px solid; */
  border-radius: 0.7rem;
  padding: 0.7rem;
  margin: 3rem 0;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0rem 0rem 0.8rem; */
}

.merci p {
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
}

.liens-autres-projets {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
}

.no-box-shadow {
  box-shadow: none;
}

.paragraphe-mis-en-avant {
  color: #353051;
  padding-left: 2rem;
  font-style: italic;
  font-size: 1.1rem;
}

.container-btn-retour {
  padding: 0.2rem 1.5rem;
  width: 100%;
}

.slim-button {
  padding: 0.2rem 0.8rem;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (min-width: 471px) {
  /* #topPage {
    min-height: 1050px;
  } */
}

@media (min-width: 768px) {
  #topPage {
    padding-top: 7.5rem;
  }

  .container1 {
    width: 95%;
  }

  .colonne1 {
    padding: 0.5rem 2rem;
  }

  h5 {
    padding: 0.4rem 0 0 0;
  }

  p,
  ul,
  ol {
    margin: 1rem 0rem;
    padding: 0 2rem;
  }

  ul,
  ol {
    padding: 0 2rem 0 4rem;
  }

  .citation {
    margin: 1.5rem 1rem;
    padding: 1rem 2rem;
  }

  /* .border-left {
    border-left: #ddebff 5px solid;
    margin: 0 4rem;
  } */
  .container-btn-retour {
    padding: 0;
  }
}

@media (min-width: 1135px) {
  #topPage {
    height: 100%;
    min-height: 100vh;
    padding-top: 6rem;
    padding-bottom: 2rem;
  }

  .container1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1135px;
    z-index: 1;
  }

  h2 {
    font-size: 2.7rem;
  }

  p,
  ul,
  ol {
    margin: 1.5rem 0rem;
    padding: 0 2rem;
  }

  ul,
  ol {
    padding: 0 2rem 0 4rem;
  }

  .citation {
    margin: 1.5rem 4rem;
    padding: 1rem 2rem;
  }
}
</style>
