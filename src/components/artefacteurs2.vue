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
    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="container-btn-retour">
        <a href="javascript:history.back()">
          <button class="btn no-box-shadow slim-button">Retour</button>
        </a>
      </div>
      <div class="colonne2">
        <img class="maxHeightimg" src="../assets/banniere-artefacteurs2.jpg"
          alt="les différentes phases de l'ux design" />
      </div>
      <!-- <div class="titre">
        <h2>La plateforme des Artef'acteurs</h2>
      </div> -->
      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Remise en contexte</h3>
        </div>
        <!-- <div class="colonne2">
          <img
            class="maxHeightimg"
            src="../assets/banniere-artefacteurs.jpg"
            alt="les différentes phases de l'ux design"
          />
        </div> -->
        <div class="colonne1">
          <div class="border-left">
            <p>
              Ceci est un projet mené en formation, chez UX France, durant 6
              semaines.
              <b>Nous avons tout au long de ce projet travaillé en binôme</b>.<br /><br />
              <b>L'association des Artef'acteurs</b> est un collectif
              <b>d'artisans d'art</b> de la région de Belfort. Ils ont
              <b>entre 25 et 55 ans</b> et ce sont des personnes qui travaillent
              seules la plupart du temps. Le but de l'association est de mettre en
              relation ces artisans afin de les aider à
              <b>sortir de l'isolement professionnel</b> et à
              <b>développer leurs activités</b> en regroupant des informations
              utiles (tels que les fournisseurs, salons, marchés...).
              <br /><br />Pour l'instant, l'association dispose d'une
              <b>page facebook</b> tenue par la fondatrice de l'association, un
              <b>google drive</b> pour s'échanger des documents et un
              <b>groupe what'app</b> pour discuter.
            </p>
          </div>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>L'UX design</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p><b>L'UX design est décomposé en 6 phases :</b></p>
            <ol>
              <li>
                <b>La planification</b> sert à comprendre les besoins du client et
                commencer à réfléchir à qui est l’utilisateur final. On définit
                également une problématique.
              </li>
              <li>
                <b>L'exploration</b> sert à comprendre qui est l'utilisateur
                final.
              </li>
              <li>
                <b>L'idéation</b> permet de brainstormer, avec des utilisateurs,
                et de trouver des solutions à notre problématique.
              </li>
              <li>
                <b>La génération,</b> c'est le moment où le projet prend vie à
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
                d'exploration, d'idéation ou de génération, selon les besoins.
                Plusieurs itérations peuvent avoir lieu.
              </li>
            </ol>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/uxDesign.jpg" alt="les différentes phases de l'ux design" />
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase de Planification</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Avant toute chose, nous avons établi un
              <b>plan d'action dans Notion</b> pour pouvoir avoir une vision
              d'ensemble, du chemin à parcourir pour mener à bien ce projet. Puis,
              <b>nous avons rencontré la fondatrice de l'association</b> des
              Artef'acteurs, qui nous a exposé ce qui existait actuellement, et ce
              qu'elle voudrait pouvoir offrir aux artisans de son association :
              une plateforme web. <br /><br />Suite à cet entretien, nous avons
              <b>reformulé et synthétisé son brief</b>. Nous avons utilisé la
              méthode des 5 pourquoi pour définir la
              <b>problématique globale</b> à laquelle nous allions devoir
              répondre. <br /><br />
              Nous nous sommes ensuite intéressées de plus près aux artisans du
              collectif des Artéf'acteurs, qui étaient donc notre cible. Nous
              avons donc créé des <b>personas hypothétiques</b> en nous aidant de
              <b>cartes UX</b> (qui synthétisent en 7 grandes catégories les
              besoins psychologiques fondamentaux des êtres humains) afin d'entrer
              en <b>empathie</b> plus facilement.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/problematique.jpg" alt="Synthèse de la problèmatique avec les 5 pourquoi" />
          <h5>
            Utilisation de la technique des 5 pourquoi pour trouver la
            problématique
          </h5>
        </div>
        <div class="colonne2">
          <img src="../assets/personasHypothetiques.jpg" alt="Nos 3 personas hypothétiques" />
          <h5>Élaboration de 3 personas hypothétiques</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/lesCartesUX.jpg" alt="Nos 3 cartes UX selectionnées et etayées" />
          <h5>
            Nos 3 cartes UX selectionnées et etayées avec des exemples
            s'appliquant aux artisans
          </h5>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase d'exploration</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Durant cette phase,
              <b>nous avons pu rencontrer 2 artisans du collectif des
                Artef'acteurs</b>
              en visioconférence. Au préalable, nous avons donc préparé ces
              entretiens en rédigeant <b>une quinzaine de questions</b> (les plus
              ouvertes possibles). Les entretiens ont duré 30 minutes chacun, et
              nous avons prié nos interlocuteurs de ne pas se brider dans leurs
              réponses afin de comprendre qui sont les artisans des Artéf'acteurs.
              <br /><br />
              Une fois les entretiens terminés, nous avons retranscrit sur des
              post-its virtuels (sur Figjam) tout ce qui avait été dit durant les
              entretiens et nous avons classé ces post-it par catégories, ce qui
              nous a donc donné un
              <b>diagramme d'affinités</b>. Grâce à ce diagramme, nous avons pu
              <b>retravailler notre persona</b>
              et aussi y inclure un verbatim.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/diagrammeAffinite.png" alt="fb artefacteurs" />
          <h5>Le diagramme d'affinité dans sa globalité</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/diagrammeAffiniteExtrait.jpg" alt="fb artefacteurs" />
          <h5>Extrait du diagramme d'affinité</h5>
        </div>

        <div class="colonne2">
          <img src="../assets/Persona.jpg" alt="fb artefacteurs" />
          <h5>Le persona</h5>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase d'idéation</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Nous avons tout d'abord réalisé
              <b>un brainstorming avec mon binôme</b> afin d'imaginer quelles
              pourraient être les fonctionnalités que pourrait comporter la
              plateforme des Artéf'acteurs. Puis nous avons préparé l'atelier
              d'idéation où nous allions recevoir 2 participantes en
              visioconférence, sur Klaxoon (un site qui permet de collaborer en
              simultané, comme Figjam).<br /><br />

              <b>Le but de l'atelier est de stimuler la créativité des
                participants</b>
              en leur exposant au préalable le brief, notre problématique, et
              notre persona afin qu'ils puissent se glisser dans la peau d'un
              artisan. Nous avons donc incité les 2 participants à exprimer toutes
              leurs idées, sans retenue, et de les noter. Nous leur avons ensuite
              exposé nos idées et leur avons demandé de leur donner une note.<br /><br />
              Nous avons ensuite fait la synthèse des idées trouvées et nous avons
              élaboré
              <b>l’arborescence</b> du projet. Elle permet de se projeter
              concrètement dans l'organisation du site en commencant à élaborer le
              menu principal et imaginer ce qui sera contenu dans les pages.
              Ensuite, <b>le userflow</b> vient compléter l'arborescence et permet
              de mettre en évidence les liens entre les pages, les interactions
              possibles.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/brainstorm3.jpg" alt="le brainstorming à 2" />
          <h5>Le brainstorming à 2 avant l'atelier d'idéation</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/atelierIdeation2.png" alt="phase 1 de l'atelier d'idéation" />
          <h5>Les idées de nos participants lors de l'atelier d'idéation</h5>
        </div>
        <!-- <div class="colonne2">
          <img
            src="../assets/atelierIdeation3.jpg"
            alt="phase 2 de l'atelier d'idéation"
          />
          <h5>Les idées de nos participants lors de l'atelier d'idéation</h5>
        </div> -->
        <div class="colonne2">
          <img src="../assets/resultatAtelierIdeation.jpg" alt="synthèse de l'atelier d'idéation" />
          <h5>
            La synthèse de l'atelier d'idéation lors de ma présentation au jury
          </h5>
        </div>
        <div class="colonne2">
          <img src="../assets/detail-arborescence.png" alt="L'arborescence" />
          <h5>
            L'arborescence sur Figjam (en haut et bleu la navbar, en bas et
            violet le footer)
          </h5>
        </div>
        <div class="colonne2">
          <img src="../assets/userflow1.jpg" alt="Le userflow" />
          <h5>Le userflow sur Figjam</h5>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase de génération</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Uns fois que nous avions notre userflow, nous pouvions passer aux
              <b>wireframes</b> sur Excalidraw (schémas très simples des pages)
              puis au <b>prototypage interactif</b> sur Figma (l'apparence des
              pages est plus poussée mais surtout les boutons sont fonctionnels).
              Nous n'avons développé que <b>la partie mentorat,</b> car c'était
              une idée qui a émergé en atelier d'idéation grâce aux utilisateurs
              et car le temps nous était compté (formation oblige).
              <br /><br />Nous avons développé ce prototypage en appliquant
              l'approche de <b>l'atomic design</b>. C'est une méthodologie de
              conception qui divise les interfaces en composants modulaires
              réutilisables, allant des éléments de base aux éléments plus
              complexes. Le but étant d'assurer
              <b>une cohérence et une facilité de maintenance accrues</b> ainsi
              qu'une <b>meilleure adaptabilité à tous les écrans</b>.<br /><br />
              Le but d'un prototype interactif est de pouvoir le faire tester à
              des utilisateurs avant de développer réellement le produit.
              <b>Cela permet de déceler en amont ce qui n'est pas compris des
                utilisateurs (en phase d'évaluation)</b>
              et donc de pouvoir corriger (en phase d'itération).
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/wireframes.jpg" alt="les wireframes sur Excalidraw" />
          <h5>Les wireframes sur Excalidraw</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/prototype2.jpg" alt="Le prototypage fonctionnel sur Figma" />
          <h5>Le prototypage fonctionnel sur Figma</h5>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase d'évaluation</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Nous avons préparé l'entretien d'évaluation en rédigeant un
              <b>protocole de test</b> contenant : <b>un scénario</b>, une
              <b>liste de tâches</b> à faire ainsi que le
              <b>circuit attendu</b> sur le prototype. Nous avons pu recevoir 2
              utilisateurs en visioconférence, pour des <b>tests synchrones</b>.
              L'utilisateur nous partageait son écran et sa caméra : nous avions
              donc accès à leurs actions et réactions en direct. Nous avons pu
              également leur poser à chacun une dizaine de questions.<br /><br />
              Nous avons aussi diffusé notre prototype sur Maze, un site qui
              permet de faire des <b>tests asynchrones</b>. L'utilisateur fait le
              test tout seul, il suit les instructions que l'on a rentrées dans le
              site en amont. Évidemment nous n'avons pas pu voir les réactions en
              direct de ces utilisateurs, par contre, nous avons eu accès aux
              <b>heatmaps</b> (qui permettent de voir où les utilisateurs ont
              cliqué).<br /><br />
              Nous avons ensuite synthétisé les entretiens et mis en évidence les
              difficultés que les utilisateurs ont eu, et donc,
              <b>les points bloquants de notre prototype</b>.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/ProtocoleTest.jpg" alt="Le protocole de test" />
          <h5>Le protocole de test</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/maze_screenshot_interaction2.jpg" alt="Une heatmap" />
          <h5>Une heatmap du test asynchrone fait sur Maze</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/restitution-recos.jpg" alt="les resititutions des entretiens" />
          <h5>
            L'analyse des entretiens synchrones, avec mise en évidence des
            points bloquants (en rouge)
          </h5>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>La phase d'itération</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              À partir des points bloquants relevés en phase d'évaluation, nous
              avons rédigé des <b>recommandations de corrections</b> à apporter en
              rappelant quel était le problème et quelle solution il fallait
              mettre en place (selon nous). <br /><br />
              Nous avons donc corrigé nos prototypes selon ces recommandations. Si
              ce projet avait été un projet à mener jusqu'au bout, il aurait donc
              fallu refaire tester les nouveaux prototypes, et ainsi de suite
              jusqu'à obtention d'une maquette ou il n'y a plus de problème
              majeur.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/5-4-Evaluation-Recommandations.jpg"
            alt="Une des recommandations que nous avions à traiter" />
          <h5>Une des recommandations que nous avions à traiter</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/6-1-Iteration.jpg" alt="La correction de la recommandation ci-dessus" />
          <h5>La correction de la recommandation ci-dessus</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/proto1.jpg" alt="Page d'accueil et page mentorat avant les corrections" />
          <h5>Page d'accueil et page mentorat avant les corrections</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/proto2.jpg" alt="Page d'accueil et page mentorat après les corrections" />
          <h5>Page d'accueil et page mentorat après les corrections</h5>
        </div>
        <div class="merci">
          <p>
            Merci de m'avoir lue !
          </p>
        </div>
        <div class="liens-autres-projets">
          <a href="#/realisations/mukiz">
            <button class="btn no-box-shadow">Voir le projet Mukiz</button>
          </a>
          <a href="#/realisations/googleux">
            <button class="btn no-box-shadow">Voir le projet Google UX</button>
          </a>
          <a href="#/realisations/onzen">
            <button class="btn no-box-shadow">Voir le projet On-Zen</button>
          </a>
        </div>
      </div>
    </div>
    <div class="btn-return">
      <!-- <a href="#/realisations/artefacteurs/#topPage"> -->
      <button class="btn-rond" @click="remonte">
        <span class="material-symbols-rounded"> keyboard_double_arrow_up </span>
      </button>
      <!-- </a> -->
    </div>
  </div>
  <!-- <div class="z-index">
      <Footer />
    </div> -->
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
  padding: 0.4rem 1.5rem 1rem 0;
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
  background-color: #353051;
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

  .espace-supp-colonne1 {
    padding: 2rem 1.5rem;
  }

  h5 {
    padding: 0.4rem 0 1.2rem 0;
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
