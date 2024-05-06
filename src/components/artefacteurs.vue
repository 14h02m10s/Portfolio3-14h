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
      <h2>L'association des Artef'acteurs</h2>
    </div>

    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="titre-phase"><h3>Remise en contexte</h3></div>
      <div class="bloc-phase">
        <div class="colonne2">
          <img
            class="maxHeightimg"
            src="../assets/logoArtefacteurs.jpg"
            alt="les différentes phases de l'ux design"
          />
        </div>
        <div class="colonne1">
          <p>
            Ceci est un projet mené en formation chez UX France, durant 6
            semaines.
            <b>Nous avons tout au long de ce projet travaillé en équipe de 2.</b
            ><br /><br />
            <b>L'association des Artef'acteurs</b> regroupe des
            <b>artisans d'art</b> de la région de Belfort. Ils ont
            <b>entre 25 et 55 ans</b> et ce sont des personnes qui travaillent
            seules. Le but de l'association est de mettre en relation ses
            artisans afin de les faire
            <b>sortir de l'isolement professionnel</b> et aussi les aider à
            <b>développer leurs activités</b> en regroupant des informations
            utiles (tels que les fournisseurs, salons, marchés...).
            <br /><br />Pour l'instant l'association dispose d'une
            <b>page facebook</b> tenue par la fondatrice de l'association, un
            <b>google drive</b> pour s'échanger des documents et un
            <b>groupe what'app</b> pour discuter.
          </p>
        </div>
      </div>

      <div class="titre-phase"><h3>L'UX design</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>L'UX design est décomposé en 6 phases :</p>
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
            src="../assets/uxDesign.jpg"
            alt="les différentes phases de l'ux design"
          />
        </div>
      </div>

      <div class="titre-phase"><h3>La phase de Planification</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Avant toute chose, nous avons établi un
            <b>plan d'action dans Notion</b> pour pouvoir avoir une vision
            d'ensemble, mais cependant assez détaillée, du chemin à parcourir.
            Puis, <b>nous avons rencontré la fondatrice de l'association</b> des
            Artef'acteurs, qui nous a exposé ce qui existait actuellement, et ce
            qu'elle voudrait pouvoir offrir aux artisans de son association :
            une plateforme web. <br /><br />Suite à cet entretien nous avons
            <b>reformulé et synthétisé son brief</b>. Nous avons utilisé la
            méthode des 5 pourquoi pour définir la
            <b>problématique globale</b> à laquelle nous allions devoir
            répondre. Celle-ci était "Comment les artisans peuvent-ils
            s'entraider à travers la plateforme ?". <br /><br />
            Nous nous sommes ensuite intéressé de plus près aux utilisateurs :
            les artisans du collectif des Artéf'acteurs. Nous avons donc créé
            des <b>personas hypothétiques</b> en nous aidant de
            <b>cartes UX</b> (qui synthétisent quels sont les besoins
            psychologiques fondamentaux des êtres humains en 7 grandes
            catégories) de manière à entrer dans <b>l'empathie</b> plus
            facilement.
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/problematique.jpg"
            alt="Synthèse de la problèmatique avec les 5 pourquoi"
          />
          <h5>
            Utilisation de la technique des 5 pourquoi pour trouver la
            problématique
          </h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/personasHypothetiques.jpg"
            alt="Nos 3 personas hypothétiques"
          />
          <h5>Élaboration de 3 personas hypothétiques</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/lesCartesUX.jpg"
            alt="Nos 3 cartes UX selectionnées et etayées"
          />
          <h5>
            Nos 3 cartes UX selectionnées et etayées avec des exemples
            s'appliquant aux artisans
          </h5>
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'exploration</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Durant cette phase
            <b
              >nous avons pu rencontrer 2 artisans du collectif des
              artef'acteurs</b
            >
            en visioconférence. Au préalable nous avons donc du préparer ces
            entretiens en rédigeant <b>une quinzaine de questions</b> (les plus
            ouvertes possibles) que nous souhiations leur poser. Les entretiens
            ont duré 30 minutes chacun, et nous avons prié nos interlocuteurs de
            ne pas se brider dans leurs réponses afin de se faire une idée plus
            juste et précise de qui sont les artisans des artéf'acteurs.
            <br /><br />
            Une fois les entretiens terminés on a écrit sur des post-its tout ce
            qui avait été dit durant les entretiens et nous avons classé ces
            post-it par catégories, ce qui nous a donc donné un
            <b>diagramme d'affinités</b>. Grâce à ce diagramme, nous avons pu
            <b>retravailler notre persona</b>
            et aussi y inclure un verbatim.
          </p>
        </div>
        <div class="colonne2">
          <img src="../assets/diagrammeAffinite.png" alt="fb artefacteurs" />
          <h5>Le diagramme d'affinité dans sa globalité</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/diagrammeAffiniteExtrait.jpg"
            alt="fb artefacteurs"
          />
          <h5>Extrait du diagramme d'affinité</h5>
        </div>

        <div class="colonne2">
          <img src="../assets/Persona.jpg" alt="fb artefacteurs" />
          <h5>Le persona</h5>
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'idéation</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Nous avons tout d'abord réalisé
            <b>un brainstorming avec mon binôme</b> afin d'imaginer quelles
            pourraient être les fonctionnalités que pourrait comporter la
            plateforme des Artéf'acteurs. Puis nous avons préparé l'atelier
            d'idéation où nous allions recevoir 2 participantes en
            visioconférence, sur Figjam.<br /><br />

            <b
              >Le but de l'atelier est de stimuler la créativité des
              participants</b
            >
            en leur exposant au préalable le brief, notre problématique, et
            notre persona afin qu'ils puissent se glisser dans la peau d'un
            artisan. Nous avons donc incité les 2 participants à exprimer toutes
            leurs idées, mêmes les plus saugrenues et de les noter. Nous leur
            avons ensuite exposé nos idées et leur avons demandé de les
            noter.<br /><br />
            Nous avons ensuite fait la synthèse des idées trouvées et nous avons
            élaboré
            <b>l’arborescence</b> du projet ainsi que <b>le userflow</b>.
          </p>
        </div>
        <div class="colonne2">
          <img src="../assets/brainstorm3.jpg" alt="le brainstorming à 2" />
          <h5>Le brainstorming à 2 avant l'atelier d'idéation</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/atelierIdeation2.png"
            alt="phase 1 de l'atelier d'idéation"
          />
          <h5>La phase 1 de l'atelier d'idéation</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/atelierIdeation3.jpg"
            alt="phase 2 de l'atelier d'idéation"
          />
          <h5>La phase 2 de l'atelier d'idéation</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/resultatAtelierIdeation.jpg"
            alt="synthèse de l'atelier d'idéation"
          />
          <h5>
            La synthèse de l'atelier d'idéation lors de ma présentation au jury
          </h5>
        </div>
        <div class="colonne2">
          <img src="../assets/detail-arborescence.png" alt="L'arborescence" />
          <h5>L'arborescence</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/userflow1.png" alt="Le userflow" />
          <h5>Le userflow</h5>
        </div>
      </div>

      <div class="titre-phase"><h3>La phase de génération</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Uns fois que nous avions notre userflow, nous pouvions attaquer les
            <b>wireframes</b> sur Exqualidraw puis le <b>prototypage</b> sur
            Figma. Nous n'avons développé qu'une petite partie de la plateforme
            car le temps nous était compté (formation oblige). Nous avons décidé
            de développer <b>la partie mentorat</b> car c'était une idée qui a
            émergé en atelier d'idéation grâce aux utilisateurs.<br /><br />Nous
            avons élaboré ce prototypage en utilisant l'approche
            <b>atomic design</b>. Cela consiste à partir du plus petit (l’atome)
            pour concevoir ensuite plus grand (la page ou l’écran). Le but étant
            d'avoir une <b>conception homogène</b>, de permettre des
            <b>modifications plus fluides</b> (gain de temps), et d'avoir une
            <b>meilleure adaptabilité à tous les écrans</b>.<br /><br />
            Le but de ce prototype interactif était de pouvoir le faire tester à
            des utilisateurs avant de développer réellement la plateforme.
            <b
              >Cela permet de déceler en amont ce qui n'est pas compris des
              utilisateurs (en phase d'évaluation)</b
            >
            et donc de pouvoir corriger (en phase d'itération).
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/wireframes.png"
            alt="les wireframes sur Excalidraw"
          />
          <h5>Les wireframes sur Excalidraw</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/prototype2.png"
            alt="Le prototypage fonctionnel sur Figma"
          />
          <h5>Le prototypage fonctionnel sur Figma</h5>
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'évaluation</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            Nous avons préparé l'entretien d'évaluation en rédigeant un
            <b>protocole de test</b> contenant : <b>un scénario</b>, une
            <b>liste de tâches</b> à faire ainsi que le
            <b>circuit attendu</b> sur le prototype. Nous avons pu recevoir 2
            utilisateurs en visioconférence, pour des <b>tests synchrones</b>.
            L'utilisateur nous partageait son écran et nous avions accès à leurs
            réactions en direct. Nous avons pu leur poser à chacun une dizaine
            de questions.<br /><br />
            Nous avons aussi diffusé notre prototype sur Maze, un site qui
            permet de faire des <b>tests asynchrones</b>. Le protocole était
            exactement le même, mais nous n'êtions pas présentes pour voir les
            réactions des utilisateurs. Nous avons par contre eu accès aux
            <b>heatmaps</b>. Elles permettent de voir où les utilisateurs ont
            cliqué.<br /><br />
            Nous avons ensuite synthétisé les entretiens et mis en évidence les
            difficultés que les utilisateurs ont eu et donc,
            <b>les points bloquants de notre prototype</b>.
          </p>
        </div>
        <div class="colonne2">
          <img src="../assets/ProtocoleTest.jpg" alt="Le protocole de test" />
          <h5>Le protocole de test</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/maze_screenshot_interaction2.jpg"
            alt="Une heatmap"
          />
          <h5>Une heatmap du test asynchrone fait sur Maze</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/restitution-recos.png"
            alt="les resititutions des entretiens"
          />
          <h5>
            L'analyse des entretiens synchrones, avec mise en évidence des
            points bloquants (en rouge)
          </h5>
        </div>
      </div>

      <div class="titre-phase"><h3>La phase d'itération</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p>
            À partir des points bloquants relevés en phase d'évaluation, nous
            avons rédigé des <b>recommandations de corrections</b> à apporter.
            <br /><br />
            Nous avons donc corrigé nos prototypes selon ces recommandations.
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/5-4-Evaluation-Recommandations.jpg"
            alt="Une des recommandations que nous avions à traiter"
          />
          <h5>Une des recommandations que nous avions à traiter</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/6-1-Iteration.jpg"
            alt="La correction de la recommandation ci-dessus"
          />
          <h5>La correction de la recommandation ci-dessus</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/proto1.png"
            alt="Page d'accueil et page mentorat avant les corrections"
          />
          <h5>Page d'accueil et page mentorat avant les corrections</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/proto2.png"
            alt="Page d'accueil et page mentorat après les corrections"
          />
          <h5>Page d'accueil et page mentorat après les corrections</h5>
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
h5 {
  text-align: right;
  padding-top: 0.3rem;
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
  gap: 1.3rem;
}
.colonne1 {
  background-color: #fff;
  height: fit-content;
  width: 100%;
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
}
.colonne2 {
  /* background-color: rgb(85, 85, 85); */
  /* height: fit-content; */
  width: 100%;
  /* border: blue 1px solid; */
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
}
.maxHeightimg {
  max-height: 400px;
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
  .container1 {
    width: 95%;
    max-width: 700px;
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
    max-width: 900px;
    z-index: 1;
    padding: 0rem 3rem 3rem 3rem;
  }
  h2 {
    font-size: 2.7rem;
  }
  /* .bloc-phase {
    display: flex;
    flex-direction: row;
  }
  .colonne1 {
    width: 40%;
  }
  .colonne2 {
    width: 60%;
  } */
  /* img {
    max-width: 100%;
    height: 100%;
  } */
}
</style>
