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
      <h2>La plateforme On-Zen <br />(page en cours de construction)</h2>
    </div> -->

    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="colonne2">
        <img class="maxHeightimg" src="../assets/banniere-on-zen2.jpg" alt="banniere avec logo On-Zen" />
      </div>
      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Remise en contexte</h3>
        </div>
        <div class="colonne1">
          <p>
            On-Zen est une plateforme dédiée à la mise en relation de praticiens
            de médecines complémentaires et de clients. Elle se compose de 3
            parties :
          </p>
          <ol>
            <li>
              <b>Un site web</b> accessible sans compte, permettant de
              rechercher des praticiens, s'informer sur les différentes
              pratiques de médecine complémentaire ainsi que sur l'entreprise
              On-Zen et consulter le blog.
            </li>
            <li>
              <b>Un tableau de bord client</b> permettant de prendre rendez-vous pour
              soi ou sa famille avec des praticiens.
            </li>
            <li>
              <b>Un tableau de bord professionnel</b> offrant aux praticiens la
              gestion de leur agenda et carnet d’adresses, rédaction de
              recommandations, édition de factures et campagnes de mailing.
            </li>
          </ol>
          <br />

          <p>
            J'ai tout d'abord analysé le profil des utilisateurs et la charte
            graphique, avant de
            <b>retravailler entièrement le site web et le dashboard client</b>.
            J'ai principalement réalisé des
            <b>wireframes et prototypes sur Figma</b>, repensé certains textes,
            créé des userflows et fait un peu d'intégration sur Symfony.
          </p>
        </div>
      </div>

      <div class="bloc-phase">
        <div class="titre-phase">
          <h3>Le site web</h3>
        </div>
        <div class="colonne1">
          <p><b>La homepage</b></p>
          <p>
            La principale modification sur la homepage concernait la partie
            haute, avec la recherche et une photo d'illustration comportant un visage. J'ai repensé la mise en page pour
            qu'elle soit plus compacte et que les champs de recherche n'empiètent plus sur le visage. Il fallait
            également trouver un moyen de faire la promotion de l'offre destinée aux praticiens.
          </p>
          <p>
            Dans les champs de recherche, il y avait des icônes gris clair.
            L'icône loupe n'était pas cliquable, mais l'icône "localisation" et
            "flèche" l'étaient. L'icône "localisation" permettait de se
            géolocaliser et l'icône "flèche" permettait d'afficher une barre
            avec un curseur afin de définir le périmètre de recherche (en km)
            autour de l'adresse indiquée par l'utilisateur. Ces deux fonctions
            n'étaient pas du tout visibles, je les ai donc rendues à nouvau
            accessibles.
          </p>
          <p>
            Il a également fallu repenser la partie dédiée aux praticiens dans
            la navbar puisqu'elle ne menait qu'à l'inscription des praticiens
            sans explications supplémentaires. J'ai décidé de créer un menu déroulant comportant en plus du lien vers la
            page d'inscription, des liens vers une page expliquant les différents
            abonnements, vers une page de prise de rendez-vous avec On-Zen pour avoir une
            démo et vers la page contact.
          </p>
          <p>Globalement les éléments prenaient tous beaucoup de place j'ai oeuvré pour réduire la taille de la page en
            hauteur de façon à ce que ce soit moins laborieux pour la partcourir et harmoniser les espaces.</p>
        </div>
        <div class="colonne2">
          <img src="../assets/home-avant-haut-desk.jpg" alt="la home page avant modifications" />
          <h5>Partie visible sans scroller de la homepage - AVANT</h5>
        </div>
        <div class="colonne2">
          <img src="../assets/on-zen-home-haut.jpg" alt="la home page après modifications" />
          <h5>Partie visible sans scroller de la homepage - APRÈS</h5>
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
