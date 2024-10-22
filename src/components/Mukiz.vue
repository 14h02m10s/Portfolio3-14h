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
    <!-- <div class="titre">
      <h2>L'onboarding Mukiz<br />(page en cours de construction)</h2>
    </div> -->

    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="colonne2">
        <img class="maxHeightimg" src="../assets/banniere-Mukiz2.jpg" alt="banniere Mukiz" />
      </div>
      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Remise en contexte</h3>
        </div>
        <div class="colonne1">
          <!-- <p><b>Mukiz</b></p> -->
          <div class="border-left">
            <p>
              Mukiz est une <b>application de blind test interactif</b>, qui
              réunit des milliers de joueurs quotidiennement. Elle compte plus de
              250K de téléchargements.
            </p>
            <!-- <p><b>Mukiz et moi</b></p> -->
            <p>
              Dans le cadre de mon rôle d'UX designer, <b>j'ai investigué les obstacles qui bloquaient certains
                utilisateurs après le téléchargement de l'application, les empêchant de commencer une première
                partie</b>.
            </p>
          </div>
        </div>
      </div>

      <div class="bloc-phase">
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
              Le tutoriel commence avec des écrans qui montrent aux utilisteurs les fonctions de micro,
              clavier et le bouton pour passer à l'extrait suivant si on ne sait pas répondre (écrans 4, 5 et 6).
            </p>
            <p>
              La partie se lance et une pop up apparait (écran 7) rappelant que l'on peut utiliser
              le micro ou le clavier pour donner ses réponses. L'écran 8 est celui qui apparait lorsque la musique se
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
              Entre le 1er et le 2ème extrait musical, 3 pop-ups apparaissent (écrans 9, 10, 11)
              pour informer comment les points sont comptés ainsi que des réponses autorisées et non autorisées.
              Le tutoriel continue, et se termine, avec un 2ème extrait musical à découvrir (écrans 12 et 13).
            </p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/screen-mukiz-existant-3eme-phase.jpg" alt="Les 5 derniers écrans du tutoriel" />
          <h5>Les 5 derniers écrans du tutoriel</h5>
        </div>
      </div>
      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>1ers tests utilisateurs</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              J'ai rédigé un guide d'entretien et
              j'ai recruté des utilisateurs. <b>Les résultats des tests que j'ai mené en synchrone sont ceux-ci :</b>
            </p>

            <ul>
              <li>2 participants sur 9 auraient passé le tuto s’ils avaient vu le bouton (les écrans 3, 4, 5 et 6)</li>
              <li>3 participants sur 9 estiment qu’ils n’ont rien appris (ou pas grand chose) d’intéressant sur le 3ᵉ
                écran</li>
              <li>4 participants sur 9 auraient aimé commencer à jouer plus vite</li>
              <li>8 participants sur 9 apprécient de savoir comment les points sont comptés (écran 9)</li>
              <li>9 participants sur 9 trouvent utile les exemples de réponses possibles (écrans 10 et 11)</li>
              <li>9 participants sur 9 aimeraient avoir le choix de plusieurs playlists dès le tutoriel</li>
            </ul>

            <br>
            <p><b>Quelques verbatims reflétant les pensées récurentes des joueurs :</b></p>
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
                me taper 15 fois Johnny pour pouvoir écouter Pink Floyd par exemple"</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Modification des maquettes</h3>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p>
              Il semblait nécessaire de <b>simplifier le nombre d'options sur le deuxième écran</b>
              pour mieux orienter les nouveaux utilisateurs : la plupart d'entre eux étant seuls et ne connaissant pas
              l'application, il était important de les diriger vers les parties en solo (ou contre d'autres joueurs en
              ligne) et les faire hésiter le moins possible avec l'option des parties entre amis.
            </p>

          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/Mukiz-ecran2-1ere-modif.jpg" alt="Modifications de l'écran 2" />
          <h5>Modifications de l'écran 2</h5>
        </div>
        <div class="colonne1">
          <div class="border-left">
            <p><b>Pour le troisième écran, j'ai choisi de proposer quatre playlists</b> issues des plus populaires de
              l'application. J'ai également ajouté une indication pour informer les utilisateurs qu'ils peuvent répondre
              avec le clavier ou leur voix. <b>Cette modification permet de supprimer les écrans 4, 5 et 6</b> du
              tutoriel
              existant, ce qui réduit le temps d'attente et le nombre de clics avant de lancer la partie.</p>
          </div>
        </div>
        <div class="colonne2">
          <img src="../assets/Mukiz-ecran3-1ere-modif.jpg" alt="Modifications de l'écran 3" />
          <h5>Modifications de l'écran 3</h5>
        </div>
        <div class="colonne1">
          <a class="link-text"
            href="https://www.figma.com/proto/gMQdDoJy0WQozFBqdbGkVe/test-maze-1?page-id=36%3A2479&node-id=36-44735&node-type=canvas&viewport=5870%2C621%2C0.56&t=TPAIQ4siAa07KLnC-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=36%3A44735">
            >> Le
            lien vers ma maquette Figma</a>
        </div>
      </div>
    </div>
    <div class="btn-return">
      <button class="btn-rond" @click="remonte">
        <span class="material-symbols-rounded"> keyboard_double_arrow_up </span>
      </button>
      <!-- </a> -->
    </div>
  </div>
  <Footer2 />
</template>

<style scoped>
#topPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%); */
  /* background: rgb(238 247 248); */
  background: #fff;
  /* background: linear-gradient(to bottom, #b5cad1, #f7feff 70%, #f7feff 70%); */
  width: 100%;
  position: relative;
  padding-top: 5.1rem;
  padding-bottom: 6.1rem;
  height: 100%;
  min-height: 100vh;
}

/* #topPage::after {
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
  box-shadow: inset 0em -1.2em #adceff;
  box-shadow: inset 0em -1.2em #e2eeff;
  box-shadow: inset 1.2rem 0em #adceff;
  box-shadow: inset 1.2rem 0em #353051;
  display: inline;
  padding: 0 2rem;
}

h5 {
  text-align: right;
  padding: 0.4rem 1.5rem 0 0;
  /* padding: 0.4rem 1.5rem 0.2rem 1.5rem; */
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
  /* background: none; */
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
  /* background-color: #b9cfd4; */
  /* background-color: #c2d8dc; */
  /* padding: 0rem 1rem 1rem 1rem; */
}

.titre-phase {
  /* padding: 1.5rem 0 1rem 0; */
  padding: 0.5rem 0;
  margin-top: 1rem;
}

.bloc-phase {
  /* border: #5096fe 1px solid; */
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 1.3rem; */
  /* background-color: #656ea6; */
  /* background-color: #f8f9ff; */
  /* background: linear-gradient(
    to bottom right,
    #5096fe,
    20%,
    rgba(80, 150, 254, 0.01) 60%
  ); */
  /* padding: 1rem 2rem; */
  margin: 1rem 0;
  /* border-radius: 1em; */
}

.colonne1 {
  background-color: #fff;
  height: fit-content;
  width: 100%;
  /* border-top: 3px solid #e05900;
  border-bottom: 3px solid #e05900; */
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
  box-shadow: rgba(0, 0, 0, 0.2) 0rem 0rem 0.8rem;
  margin: 0.5rem 0;
}

/* .maxHeightimg {
  max-height: 400px;
} */
/* .z-index {
  z-index: 3;
  bottom: 0;
  position: absolute;
  width: 100%;
} */

.citation {
  background: #ddebff;
  background: #353051;
  background: linear-gradient(303deg, rgba(26, 30, 54, 1) 60%, rgba(53, 48, 81, 1) 96%);
  margin: 1rem 0rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  /* box-shadow: inset 0.1rem 0.4rem rgb(206, 208, 216); */
}

.citation p {
  margin: 0;
  padding: 0;
  color: #fff;
  font-weight: 400;
  font-size: 1.3rem;
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
    /* max-width: 700px; */
    /* padding: 0rem 2rem 3rem 2rem; */
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
    /* align-items: start; */
    /* width: 85%; */
    max-width: 1135px;
    z-index: 1;
    /* padding: 0rem 3rem 3rem 3rem; */
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
