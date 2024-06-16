<script setup>
import PresentationItemSkills2 from "./PresentationItemSkills2.vue";
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

const cvURL =
  "https://14h02m10s.github.io/Portfolio3-14h/cv-juin2024-portfolio.pdf";
</script>

<template>
  <div>
    <div class="espace-nav">
      <div id="head">
        <div class="titre">
          <h2>PRÉSENTATION</h2>
        </div>
        <div class="prez-et-skills">
          <div class="paves-textes">
            <h3>Qui suis-je ?</h3>
            <div
              class="section-texte"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h4>Mon passé</h4>
              <p>
                J'ai passé ces <b>deux dernières décennies</b> au sein de
                diverses entreprises de la métropole lilloise, en tant que
                <b>maquettiste</b>. J'y ai fait une multitude de catalogues,
                plaquettes, livres, affiches, PLV, bannières web, emails. J'ai
                perfectionné mon sens du détail, ainsi que ma capacité à
                produire des livrables à la fois communicants, harmonieux et
                respectueux des différentes chartes graphiques.
              </p>
            </div>

            <div
              class="section-texte"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h4>Ces temps-ci</h4>
              <p>
                Début 2023, j’ai entamé ma reconversion dans le développement
                web. Pendant 4 mois, j’ai suivi à temps complet la
                <b>formation «&nbsp;Développeur .NET fullstack&nbsp;»</b> chez
                M2i, qui s’est ensuite conclue par un mois de stage.
                <br /><br />
                J'ai ensuite poursuivi le cheminement de ma reconversion avec la
                <b>formation «&nbsp;UX bootcamp&nbsp;»</b> chez UX France,
                pendant 7 semaines, et qui s'est terminée fin avril 2024. J'ai
                d'ailleurs obtenu la certification RS6024 "Innover avec l'UX
                design".
              </p>
            </div>
            <div
              class="section-texte"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h4>Mon futur</h4>
              <p>
                Désormais, je sais que le développement web ne sera pas mon
                futur métier mais cet apprentissage devraient m'aider à mieux
                anticiper et comprendre la faisabilité des choses, en tant que
                <b>designer UX/UI</b>. Je suis toujours attirée par le domaine
                du graphisme mais je nourris le désir d'élargir mes compétences.
                Au fil du temps, j'ai réalisé que
                <b
                  >le design centré utilisateur est essentiel pour garantir le
                  succès d'un site web ou d'une application.</b
                >
                <br /><br />N’hésitez pas à me
                <a href="#/contact" class="link-text"><b>contacter</b></a> si
                mon profil vous intéresse&nbsp;!
              </p>
            </div>
          </div>

          <div class="super-container-hardSkills">
            <h3>Mes compétences</h3>

            <div
              class="container-hardSkills-titre"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div class="titre-skills"><h4>Compétences techniques</h4></div>
              <div class="container-two-containers-hard-skills">
                <div class="two-containers-hard-skills">
                  <div class="container-hardSkills">
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Figma.svg"
                          alt="picto Figma"
                        />
                      </template>
                      <template #texte><p>Figma</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Adobe_XD_CC_icon.svg"
                          alt="picto XD"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>Xd</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Adobe_InDesign_CC_logo.svg"
                          alt="picto Indesign"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>Indesign</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Adobe_Photoshop_CC_icon.svg"
                          alt="picto Photoshop"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>Photoshop</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Adobe_Illustrator_CC_icon.svg"
                          alt="picto Illustrator"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>Illustrator</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Photopea_logo.svg"
                          alt="picto Photopea"
                        />
                      </template>
                      <template #texte><p>Photopea</p></template>
                    </PresentationItemSkills2>
                  </div>
                  <div class="container-hardSkills">
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/HTML5.svg"
                          alt="picto Html"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>HTML 5</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/CSS3_logo.svg"
                          alt="picto Css"
                          class="height100"
                        />
                      </template>
                      <template #texte><p>CSS 3</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Unofficial_JavaScript_logo_2.svg"
                          alt="picto Js"
                        />
                      </template>
                      <template #texte><p>JavaScript</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Vuejs_Logo_2.svg"
                          alt="picto Vue"
                        />
                      </template>
                      <template #texte><p>Vue.js</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/React_Logo.svg"
                          alt="picto React"
                        />
                      </template>
                      <template #texte><p>React</p></template>
                    </PresentationItemSkills2>
                    <PresentationItemSkills2>
                      <template #image>
                        <img
                          src="../assets/pictos/Tailwind_CSS_Logo.svg"
                          alt="picto Tailwind"
                          class="width100"
                        />
                      </template>
                      <template #texte><p>Tailwind</p></template>
                    </PresentationItemSkills2>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="container-hardSkills-titre"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div class="titre-skills"><h4>Savoir-faire</h4></div>
              <div class="container-hardSkills, special-liste">
                <ul>
                  <li>• Entretien</li>
                  <li>• Persona</li>
                  <li>• Experience map</li>
                  <li>• Atelier d’idéation</li>
                  <li>• Userflow</li>
                  <li>• Wireframing</li>
                  <li>• Atomic design / design tokens</li>
                  <li>• Maquettage / mise en page</li>
                  <li>• Test synchrone et asynchrone</li>
                  <li>• Accessibilité</li>
                  <li>• Travail collaboratif</li>
                </ul>
              </div>
            </div>
            <div
              class="container-hardSkills-titre"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div class="titre-skills"><h4>Savoir-être</h4></div>
              <div class="container-hardSkills, special-liste">
                <ul>
                  <li>• À l'écoute</li>
                  <li>• Empathique</li>
                  <li>• Réactive</li>
                  <li>• Esprit d’équipe</li>
                  <li>• Rigoureuse</li>
                  <li>• Créative</li>
                  <li>• Perséverante</li>
                  <li>• Sens de l'organisation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container-button">
          <a :href="cvURL" target="_blank" download="CV-fchambinaud.pdf"
            ><button class="btn">Plus de détails sur mon cv</button></a
          >
        </div>
      </div>
    </div>
    <!-- <div class="btn-return">
      <a href="#head">
        <button class="btn-carre">
          <span class="material-symbols-rounded">
            keyboard_double_arrow_up
          </span>
        </button>
      </a>
    </div> -->
    <!-- <div class="z-index"> -->
    <Footer2 />
    <!-- </div> -->
  </div>
</template>

<style scoped>
.espace-nav {
  padding-top: 3rem;
  /* background: linear-gradient(to bottom, #1c657c, #1c4856 50%, #1c4856 50%); */
  background: rgb(238 247 248);
  width: 100%;
  position: relative;
}
/* .espace-nav::after {
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
#head {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titre {
  width: 100%;
  z-index: 1;
  color: #1c657c;
}
h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.3rem 3rem 1rem 3rem;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
h3 {
  text-align: center;
  padding: 0.3rem 3rem;
  font-weight: 600;
  font-size: 1.4rem;
  color: #1c657c;
  font-family: "Montserrat", sans-serif;
}
h4 {
  padding: 0 0 0.8rem 0;
  font-weight: 700;
  font-size: 1.2rem;
  color: #e05900;
  font-family: "Montserrat", sans-serif;
}
.prez-et-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  z-index: 1;
}
.section-texte {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: #fff;
  margin: 0.5rem 1rem 2rem 1rem;
  padding: 2rem;
  border-top: 3px solid #e05900;
  border-bottom: 3px solid #e05900;
}
.height100 {
  height: 100%;
}
.width100 {
  width: 100%;
}
p {
  font-size: 0.9rem;
  text-align: left;
}
ul {
  padding: 0;
}
li {
  font-weight: 600;
  padding: 0.2rem;
  list-style-type: none;
  font-size: 0.9rem;
}
a {
  color: #e05900;
  /* color: #fff; */
}
/* a:hover {
  color: #fff;
} */
.link-text {
  font-weight: 600;
  font-size: 1rem;
  box-shadow: inset 0 0 0 0 #e05900;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.link-text:hover {
  color: #fff;
  box-shadow: inset 200px 0 0 0 #e05900;
}
.super-container-hardSkills {
  width: 100%;
  overflow: hidden;
}
.container-hardSkills-titre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 0.5rem 1rem 2rem 1rem;
  padding: 2rem;
  border-top: 3px solid #e05900;
  border-bottom: 3px solid #e05900;
}
.titre-skills {
  display: flex;
  justify-content: center;
}
.container-two-containers-hard-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.two-containers-hard-skills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
}
.container-hardSkills {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: fit-content;
  width: 100%;
}
.container-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
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
  /* background: none; */
  background-color: #e05900;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
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

#head {
  width: 100%;
}
#head:target {
  padding-top: 6.1rem;
  margin-top: -6.1rem;
}
/* .btn-return {
  display: flex;
  justify-content: right;
  width: 100%;
  position: relative;
  bottom: 5.5rem;
  right: 1.5rem;
  height: 0;
}
.btn-carre {
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 4;
} */
/* .z-index {
  z-index: 3;
  bottom: 0;
  position: absolute;
  width: 100%;
} */

@media (min-width: 471px) {
  /* #head:target {
    padding-top: 9rem;
    margin-top: -9rem;
  } */
}
@media (min-width: 768px) {
  #head:target {
    padding-top: 8.4rem;
    margin-top: -8.4rem;
  }
  .espace-nav {
    padding-bottom: 3rem;
  }
  .paves-textes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem auto;
    padding: 0;
    width: 43rem;
    overflow: hidden;
  }
  .super-container-hardSkills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 43rem;
  }
  .container-two-containers-hard-skills {
    display: flex;
    flex-direction: row;
  }
  .two-containers-hard-skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: left;
  }
  .container-hardSkills-titre {
    display: flex;
    flex-direction: column;
    justify-content: left;
    margin: 1rem;
    width: 100%;
  }
  .container-hardSkills {
    margin: 0 2rem;
  }
  .section-texte {
    margin: 0.5rem 0 2rem 0;
  }
  .container-button {
    margin: 1rem 0;
  }
  ul {
    column-count: 2;
    column-gap: 0;
  }
}
@media (min-width: 1135px) {
  #head:target {
    padding-top: 6.8rem;
    margin-top: -6.6rem;
  }
  #head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 3rem;
  }
  .espace-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3rem;
    position: relative;
  }
  h2 {
    font-size: 2.7rem;
    padding: 0.3rem 3rem 1.8rem 3rem;
  }
  h3 {
    text-align: left;
    padding: 0.3rem 3rem;
  }
  .prez-et-skills {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: start;
    width: 100%;
    z-index: 1;
  }
  .titre {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .paves-textes {
    margin: 0 1rem;
  }
  .super-container-hardSkills {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    width: auto;
  }
  .container-hardSkills-titre {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0.5rem 1rem 2rem 1rem;
    padding: 2rem;
  }
  .two-containers-hard-skills {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: left;
  }
  .container-hardSkills {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    margin: 0 2rem;
  }
  .special-liste {
    display: flex;
    align-items: center;
  }
  ul {
    column-count: 1;
  }
  li {
    font-size: 1rem;
  }
  p {
    font-size: 1rem;
  }
}
@media (min-width: 1440px) {
  .super-container-hardSkills {
    width: 44rem;
  }
  .two-containers-hard-skills {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: left;
  }
  ul {
    column-count: 2;
  }
  .paves-textes,
  .container-hardSkills-titre {
    width: 44rem;
  }
}
</style>