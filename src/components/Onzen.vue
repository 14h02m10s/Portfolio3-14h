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
  <div id="topArtef">
    <div class="titre">
      <h2>La plateforme On-Zen (page en cours de construction)</h2>
    </div>

    <div class="container1" data-aos="fade-up" data-aos-duration="600">
      <div class="titre-phase"><h3>Remise en contexte</h3></div>
      <div class="bloc-phase">
        <div class="colonne2">
          <img
            class="maxHeightimg"
            src="../assets/banniere-on-zen.jpg"
            alt="banniere avec logo On-Zen"
          />
        </div>
        <div class="colonne1">
          <p><b>On-Zen</b></p>
          <p>
            On-Zen est une plateforme dédiée à la mise en relation des
            praticiens de médecines complémentaires et de leurs clients. Le site
            se compose de 3 grandes parties :
          </p>
          <ol>
            <li>
              <b>Le site web</b> (accessible sans créer de compte) permet de
              rechercher des praticiens, informe sur les différentes pratiques
              de médecine complémentaire ainsi que sur l'entreprise On-Zen, et
              contient également un blog.
            </li>
            <li>
              <b>Le dashboard professionnel</b> qui permet aux praticiens de
              gérer leur agenda, leur carnet d'adresses, écrire des
              recommandations, éditer des factures, faire des campagnes de
              mailing...
            </li>
            <li>
              <b>Le dashboard client</b> qui permet de prendre rendez-vous avec
              des praticiens de médecine complémentaire pour soi et des membres
              de sa famille.
            </li>
          </ol>
          <br />
          <p><b>On-Zen et moi</b></p>

          <p>
            J'ai effectué un stage de <b>2 mois</b> durant lequel j'ai du tout
            d'abord prendre connaissance du profil des utilisateurs, de la
            charte graphique, puis
            <b>
              j'ai entièrement retravaillé le site web, ainsi que le dashboard
              client</b
            >. J'ai principalement travaillé sur des wireframes et des
            prototypes Figma. Mais j'ai également repensé certains textes, créé
            des userflows et j'ai fait un peu d'intégration (sur symfony).
          </p>
        </div>
      </div>

      <div class="titre-phase"><h3>Le site web</h3></div>
      <div class="bloc-phase">
        <div class="colonne1">
          <p><b>La homepage</b></p>
          <p>
            La principale modification sur la homepage concernait la partie
            haute, avec la recherche et une photo d'illustration (visage), afin
            qu'elle soit plus compacte et mieux pensée d'un point de vue
            expérience utilisateur.
          </p>
          <p>
            Dans les champs de recherche, il y avait des icones gris clair.
            L'icône loupe n'était pas cliquable, mais l'icône "localisation" et
            "flèche" l'étaient. L'icône "localisation" permettait de se
            géolocaliser et l'icône "flèche" permettait d'afficher une barre
            avec un curseur afin de définir le périmètre de recherche (en km)
            autour de l'adresse indiquée par l'utilisateur. Ces 2 fonctions
            n'étaient pas du tout visibles, je les ai donc rendues à nouvau
            accessibles.
          </p>
          <p>
            Il a également fallu repenser la partie dédiée aux praticiens dans
            la navbar puisqu'elle ne menait qu'à l'inscription des praticiens
            sans explications suppélmentaires. J'ai ajouté un lien vers une page
            tarifs, vers une prise de rendez-vous avec On-Zen pour avoir une
            démo, et vers la page contact.
          </p>
        </div>
        <div class="colonne2">
          <img
            src="../assets/home-avant-haut-desk.jpg"
            alt="la home page avant modifications"
          />
          <h5>Partie visible sans scroller de la homepage - AVANT</h5>
        </div>
        <div class="colonne2">
          <img
            src="../assets/on-zen-home-haut.jpg"
            alt="la home page après modifications"
          />
          <h5>Partie visible sans scroller de la homepage - APRÈS</h5>
        </div>
      </div>
    </div>
    <div class="btn-return">
      <button class="btn-carre" @click="remonte">
        <span class="material-symbols-rounded"> keyboard_double_arrow_up </span>
      </button>
      <!-- </a> -->
    </div>
  </div>
  <Footer2 />
</template>

<style scoped>
#topArtef {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%); */
  /* background: rgb(238 247 248); */
  /* background: #f7feff; */
  background: linear-gradient(to bottom, #b5cad1, #f7feff 70%, #f7feff 70%);

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
  color: #1c657c;
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
  /* background-color: #b9cfd4; */
  /* background-color: #c2d8dc; */
  padding: 0rem 1rem 1rem 1rem;
}
.titre-phase {
  padding: 1.5rem 0 1rem 0;
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
  border-top: 3px solid #e05900;
  border-bottom: 3px solid #e05900;
  box-shadow: rgba(0, 0, 0, 0.05) 0.2rem 0.2rem 0.5rem;
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
  box-shadow: rgba(0, 0, 0, 0.05) 0.2rem 0.2rem 0.5rem;
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
    /* padding: 0rem 2rem 3rem 2rem; */
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
    /* padding: 0rem 3rem 3rem 3rem; */
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
