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


export default {
  data() {
    return {
      activeSection: null, // Stocke l'identifiant de la section active
    };
  },
  methods: {
    scrollToSection(id) {
      this.activeSection = id; // Met à jour la section active
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<template>
  <div id="topPage">
    <!-- <div class="titre">
      <h2>L'onboarding Mukiz<br />(page en cours de construction)</h2>
    </div> -->

    <div class="container-links">
      <!-- <div class="bloc-phase fixed-links">
        <p>
          <a href="#contexte" @click.prevent="scrollToSection('contexte')"
            :class="{ active: activeSection === 'contexte' }">Remise en contexte</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
            href="#analyse-existant" @click.prevent="scrollToSection('analyse-existant')"
            :class="{ active: activeSection === 'analyse-existant' }">Analyse de
            l'existant</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#test1" @click.prevent="scrollToSection('test1')"
            :class="{ active: activeSection === 'test1' }">Tests
            utilisateurs #1</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#modif-maquettes" @click.prevent="scrollToSection('modif-maquettes')"
            :class="{ active: activeSection === 'modif-maquettes' }">Modification
            des maquettes #1</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#test2" @click.prevent="scrollToSection('test2')"
            :class="{ active: activeSection === 'test2' }">Tests
            utilisateurs #2</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#modif-maquettes2"
            @click.prevent="scrollToSection('modif-maquettes2')"
            :class="{ active: activeSection === 'modif-maquettes2' }">Modification
            des maquettes #2</a>
        </p>
      </div> -->
    </div>
    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="colonne2">
        <img class="maxHeightimg" src="../assets/banniere-Mukiz2.jpg" alt="banniere Mukiz" />
      </div>



      <div class=" bloc-phase" id="contexte">
        <div class="titre-phase">
          <h3>Remise en contexte</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Mukiz est une <b>application de blind test interactif</b>, qui
              réunit des milliers de joueurs quotidiennement et déjà plus de
              250K téléchargements.
            </p>
            <p>
              Dans le cadre de mon rôle d'UX designer, <b>j'ai investigué les obstacles qui bloquaient certains
                utilisateurs après le téléchargement de l'application, les empêchant de commencer une première
                partie</b>.
            </p>
          </div>
        </div>
      </div>


      <div class="bloc-phase" id="analyse-existant">
        <div class="titre-phase">
          <h3>Analyse de l'existant</h3>
        </div>

        <div class="colonne1">
          <div class="border-left">
            <p>
              Les 3 premiers écrans permettent : </p>

            <ul>
              <li>d'orienter les joueurs selon leur pays</li>
              <li>de définir le mode de jeu qu'ils souhaitent (entre amis ou pas)</li>
              <li>de rappeler les règles</li>
            </ul>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/screen-mukiz-existant-1ere-phase.jpg" alt="Les 3 premiers écrans de l'app Mukiz" />
          <h5>Les 3 premiers écrans de l'application</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Le tutoriel commence avec des écrans qui montrent aux utilisateurs les fonctions de micro,
              clavier et le bouton pour passer à l'extrait suivant si on ne sait pas répondre (écrans 4, 5 et 6).
            </p>
            <p>
              La partie se lance et une pop-up apparaît (écran 7) rappelant que l'on peut utiliser
              le micro ou le clavier pour donner ses réponses. L'écran 8 est celui qui apparaît lorsque la musique se
              lance et que l'on peut jouer.
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/screen-mukiz-existant-2eme-phase.jpg" alt="Les 5 premiers écrans du tutoriel" />
          <h5>Les 5 premiers écrans du tutoriel</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Entre le 1er et le 2e extrait musical, 3 pop-ups apparaissent (écrans 9, 10, 11) pour informer comment les
              points sont comptés ainsi que des réponses autorisées et non autorisées. Le tutoriel continue, et se
              termine, avec un 2e extrait musical à découvrir (écrans 12 et 13).
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/screen-mukiz-existant-3eme-phase.jpg" alt="Les 5 derniers écrans du tutoriel" />
          <h5>Les 5 derniers écrans du tutoriel</h5>
        </div>
      </div>


      <div class="bloc-phase" id="test1">
        <div class="titre-phase">
          <h3>Tests utilisateurs #1</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              J'ai rédigé un guide d'entretien et
              j'ai recruté des utilisateurs. <b>Les résultats des tests que j'ai menés en synchrone sont ceux-ci :</b>
            </p>

            <ul>
              <li>2 participants sur 9 auraient passé le tuto s’ils avaient vu le bouton (les écrans 3, 4, 5 et 6).</li>
              <li>3 participants sur 9 estiment qu’ils n’ont rien appris (ou pas grand-chose) d’intéressant sur le 3ᵉ
                écran.</li>
              <li>4 participants sur 9 auraient aimé commencer à jouer plus vite.</li>
              <li>8 participants sur 9 apprécient de savoir comment les points sont comptés (écran 9).</li>
              <li>9 participants sur 9 trouvent utiles les exemples de réponses possibles (écrans 10 et 11).</li>
              <li>9 participants sur 9 aimeraient avoir le choix de plusieurs playlists dès le tutoriel.</li>
            </ul>

            <br>
            <p><b>Quelques verbatims reflétant les pensées récurrentes des joueurs :</b></p>

          </div>
          <div class="citation">
            <p>" Je me suis sentie un peu perdue... j’aimerai avoir un bouton : “Je veux jouer seul” !
              "</p>
          </div>
          <div class="citation">
            <p>"Ha oui donc il faut pas forcément une réponse super complète ? Juste "Céline" ça suffit ?"</p>
          </div>
          <div class="citation">
            <p>"Ça aurait ete bien qu’il n’y ait le choix entre 2-3 playlists, genre parce que je sais pas si je vais
              devoir
              me taper 15 fois Johnny pour pouvoir écouter Pink Floyd par exemple."</p>
          </div>
        </div>
      </div>


      <div class="bloc-phase" id="modif-maquettes">
        <div class="titre-phase">
          <h3>Modification des maquettes #1</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Il semblait nécessaire de <b>simplifier le nombre d'options sur le deuxième écran</b>
              pour mieux orienter les nouveaux utilisateurs : la plupart d'entre eux étant seuls et ne connaissant pas
              l'application, il était important de les diriger vers les parties en solo (ou contre d'autres joueurs en
              ligne) et de les faire hésiter le moins possible avec l'option des parties entre amis.
            </p>
            <p><b>Pour le troisième écran, j'ai choisi de supprimer l'encart sur la gamification et de plutôt proposer
                quatre playlists</b> issues des plus populaires de
              l'application. J'ai également ajouté une indication pour informer les utilisateurs qu'ils peuvent répondre
              avec le clavier ou leur voix. <b>Cette modification permet de supprimer les écrans 4, 5 et 6</b> du
              tutoriel
              existant, ce qui réduit le temps d'attente et le nombre de clics avant de lancer la partie.</p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/Mukiz-ecran2et3-1ere-modif.jpg" alt="Modifications de l'écran 2 et 3" />
          <h5>Modifications de l'écran 2 et 3</h5>
        </div>
        <div class="colonne1">
          <a class="link-text" target="_blank"
            href="https://www.figma.com/proto/gMQdDoJy0WQozFBqdbGkVe/test-maze-1?page-id=36%3A2479&node-id=36-44735&node-type=canvas&viewport=5870%2C621%2C0.56&t=TPAIQ4siAa07KLnC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=36%3A44735">
            >> Tester le prototype Figma avec les premières modifications</a>
        </div>
      </div>


      <div class="bloc-phase" id="test2">
        <div class="titre-phase">
          <h3>Tests utilisateurs #2</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Voici ce qui ressort du <b>test asynchrone sur Maze</b> que j'ai mis en place : </p>
            <p><b>Les joueurs accordent de l'importance au fait de gagner des points.</b> En effet sur les 36
              participants,
              seulement 8 estiment que cela n'a pas ou peu d'importance.
            </p>
            <!-- <ul>
              <li>3 participants sur 36 = très peu</li>
              <li>5 participants sur 36 = peu</li>
              <li><b>10 participants sur 36 = moyennement</b></li>
              <li><b>7 participants sur 36 = pas mal</b></li>
              <li><b>11 participants sur 36 = beaucoup</b></li>
            </ul> -->
            <p> Sur l'écran 1, <b>certains utilisateurs se demandent si le choix d'aller vers "France" ou "reste du
                monde" va impacter les musiques qu'ils auront</b> (ou sur la langue de l'interface). Il s'avère que si
              un utilisateur
              choisit "France" il jouera automatiquement avec la playlist "best of français", alors que s'il choisit
              "Reste du monde", il jouera automatiquement avec la playlist "best of international". Et concernant la
              langue, l'application n'existe qu'en français pour l'instant.</p>
            <p><b>97% des utilisateurs arrivent à bon port</b> pour la 1re phase du test, même si 24% font des détours,
              je pense que sur ces 22%, une grosse majorité veut explorer, et voir ce qui marche, et ce qui ne marche
              pas. <b>Certains aussi, se dirigent vers les parties entre amis,</b> car ils n'envisagent pas de jouer
              seul.
            </p>
          </div>

          <div class="citation">
            <p>"Je me suis posé la question de savoir si le fait de choisir "France" allait influencer la playlist
              (chansons françaises uniquement...)"</p>
          </div>
          <div class="citation">
            <p>"Je ne joue jamais seule, alors j'ai essayé la partie "Jouer en groupe" mais ça ne fonctionnait pas."</p>
          </div>
          <div class="citation">
            <p>"Le check pour solo/multijoueur m'a perturbé, j'ai cru qu'on pouvait sélectionner les deux"</p>
          </div>
        </div>

        <div class="colonne2">
          <img src="../assets/resume-1er-parcours-mukiz-maze.jpg" alt="Screen ecran maze 1ere phase du test" />
          <h5>Résultats de la 1ere phase de test</h5>
        </div>

        <div class="colonne1">
          <div class="border-left">
            <!-- <p><b>À quel point êtes-vous pressé de jouer ?</b> (après avoir passé les 2 premiers écrans)
            </p> -->
            <p>À la fin de la 1re phase de ce test, <b>73% des participants ont déclaré avoir envie, voir très envie de
                jouer
              </b>.
            </p>
            <!-- <ul>
              <li>1 participants sur 30 = très peu</li>
              <li>2 participants sur 30 = peu</li>
              <li>5 participants sur 30 = moyennement</li>
              <li><b>7 participants sur 30 = pas mal</b></li>
              <li><b>15 participants sur 30 = beaucoup</b></li>
            </ul> -->
          </div>
          <div class="citation">
            <p>"J’ai envie de jouer et sélectionner une playlist."</p>
          </div>
          <div class="citation">
            <p>"Je ne connaissais pas cette application, j'ai envie de
              la télécharger actuellement."</p>
          </div>

          <div class="border-left">
            <!-- <p><b> Si vous avez cliqué sur le bouton 'voir les astuces', quel a été votre ressenti ? </b> Et si vous
              n'avez pas vu cette page, que souhaiteriez-vous y trouver ?
            </p> -->
            <p>Au début de la 2e phase de test, les utilisateurs avaient le choix entre lancer directement la partie
              ou
              aller voir les
              astuces. <b>Les résultats sont très équilibrés</b> puisque :</p>
            <ul>
              <li><b>15/31 n’ont pas cliqué sur les astuces.</b></li>
              <li><b>16/31 ont cliqué sur les astuces.</b> Parmi ces 16 utilisateurs, 8 ont cliqué sur le bouton "
                Démarrer la partie" présent sur la pop-up des astuces, 8 sont revenus sur l’écran 3 (soit par habitude
                faire "retour" ? soit pour
                choisir une playlist ?) et ont ensuite cliqué sur "Démarrer la partie".</li>
            </ul>
          </div>
        </div>

        <div class="colonne2">
          <img src="../assets/resume-2eme-parcours-mukiz-maze.jpg" alt="Screen ecran maze 2eme phase du test" />
          <h5>Résultats de la 2eme phase de test</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">

            <div class="citation">
              <p>"Je n'ai pas cliqué sur le bouton voir les astuces pour pouvoir jouer plus rapidement. Je trouve plus
                intéressant l'idée d'avoir des astuces entre 2 parties par exemple."</p>
            </div>
            <div class="citation">
              <p>"J'aurai bien aimé avoir une petite explication simple sur les points (qui sont la base dans tout jeu
                de
                blind test).
                "</p>
            </div>
          </div>
        </div>
      </div>


      <div class="bloc-phase" id="modif-maquettes2">
        <div class="titre-phase">
          <h3>Modification des maquettes #2</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Voici les dernières modifications apportées aux maquettes avant intégration :
            <ul>
              <li><b>Simplification des boutons</b> servant à orienter les joueurs à leur arrivée dans l'application,
                afin de passer de 2 clics à un seul (suppression des cases à cocher vertes).</li>
              <li><b>Ajustement du wording</b> des écrans 2 et 3 pour les rendre <b>plus courts et plus clairs</b>.</li>
              <li><b>Retrait de la consigne n°2</b> sur l'écran 3, elle est <b>visible sur la pop-up</b>
                qui apparaît juste avant le début de la partie. Ajout d’un bouton de validation pour garantir que
                l'utilisateur ait le temps de lire cette pop-up.</li>
              <li><b>Suppression du bouton 'Voir les astuces'</b>, les astuces étant à nouveau intégrées sur des pop-ups
                entre le 1er et
                le 2ème extrait musical, durant la première partie.</li>
              <li><b>Remaniement du wording et de la mise en page des pop-ups d'astuces</b> pour une <b>lecture plus
                  fluide</b> et des <b>exemples mieux adaptés</b>, tant en français qu'à l'international. <b>Remise en
                  place également de la pop-up explicative sur les points.</b>
              </li>
              <li>Ajout d'un bouton, accessible pendant la partie, pour revoir les astuces à tout moment.</li>
            </ul>
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/Mukiz-screen-maquette-finale.jpg" alt="Maquette finale vue prototype sur figma" />
          <h5>Aperçu de la maquette finale</h5>
        </div>
        <div class="colonne1">
          <a class="link-text" target="_blank"
            href="https://www.figma.com/proto/sWBZiWPbAUpI1cmEt5cMQC/onboarding---maquettes-finales-pour-dev?page-id=146%3A634&node-id=198-24113&node-type=frame&viewport=2543%2C-197%2C0.2&t=YWkgTHeTRawGddPp-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=198%3A24113&show-proto-sidebar=1">
            >> Tester le prototype Figma final</a>
        </div>
        <div class="merci">
          <p>
            Merci de m'avoir lue !
          </p>
        </div>
        <div class="liens-autres-projets">
          <a href="#/realisations/googleux">
            <button class="btn no-box-shadow">Voir le projet Google UX</button>
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
  justify-content: center;
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
  /* padding-top: 4rem; */
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

#contexte,
#analyse-existant,
#test1,
#modif-maquettes,
#test2,
#modif-maquettes2 {
  scroll-margin-top: 10rem;
}

.container-links {
  /* background-color: #1a1e36; */
  width: 100%;
  position: fixed;
  top: 2rem;
  height: auto;
  z-index: 3;
  display: flex;
  justify-content: center;

}

.fixed-links {
  /* position: fixed;
    top: 3.7rem; */
  /* Place les liens juste en dessous de la navbar */
  left: 0;
  width: 100%;
  background-color: #e7e4ff;
  /* background-color: #362c85; */
  /* Optionnel : ajoute un fond si besoin */
  /* padding: 0.5rem; */
  display: flex;
  /* gap: 1rem; */
  justify-content: center;
  align-items: center;
  z-index: 2;
  /* Assure que les liens restent au-dessus du contenu */
  padding: 0 1.5rem;
}

.fixed-links a {
  color: #353051;
  font-family: Montserrat;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: underline;
}

.fixed-links p {
  color: #353051;
  font-size: 0.9rem;
  margin: 0.7rem 0rem;
}

.fixed-links a.active {
  font-weight: 700;
  text-decoration: none;
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
    /* padding-top: 2.5rem; */
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
  #contexte,
  #analyse-existant,
  #test1,
  #modif-maquettes,
  #test2,
  #modif-maquettes2 {
    scroll-margin-top: 10rem;
  }

  .container-links {
    /* background-color: #1a1e36; */
    width: 100%;
    position: fixed;
    top: 4.5rem;
    height: auto;
    z-index: 3;
    display: flex;
    justify-content: center;
  }

  .fixed-links {
    /* position: fixed;
    top: 3.7rem; */
    /* Place les liens juste en dessous de la navbar */
    left: 0;
    width: 100%;
    background-color: #e7e4ff;
    /* background-color: #362c85; */
    /* Optionnel : ajoute un fond si besoin */
    /* padding: 0.5rem; */
    display: flex;
    /* gap: 1rem; */
    justify-content: center;
    align-items: center;
    z-index: 2;
    /* Assure que les liens restent au-dessus du contenu */
    /* border-radius: 5rem; */
  }

  .fixed-links a {
    color: #353051;
    font-family: Montserrat;
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: underline;
  }

  .fixed-links p {
    color: #353051;
    font-size: 0.9rem;
    margin: 0.7rem 0rem;
  }

  .fixed-links a.active {
    font-weight: 700;
    text-decoration: none;
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

  #contexte,
  #analyse-existant,
  #test1,
  #modif-maquettes,
  #test2,
  #modif-maquettes2 {
    scroll-margin-top: 7rem;
  }

  .container-links {
    top: 2.7rem;
  }

}
</style>
