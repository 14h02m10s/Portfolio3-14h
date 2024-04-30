<script setup>
import PresentationItemSkills2 from "./PresentationItemSkills2.vue";

const cvURL =
  "https://14h02m10s.github.io/Portfolio2-14h/CV_3W_PF_compressed.pdf";
</script>

<template>
  <div>
    <div class="espace-nav">
      <div id="head">
        <div class="titre">
          <h2 class="title-linear-background">PRÉSENTATION</h2>
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
                Je suis ravie de vous accueillir sur mon portfolio, un espace où
                se rencontrent
                <b>20 ans d'expérience en tant que maquettiste</b> et ma passion
                naissante pour le développement web.
                <br />
                <br />
                Au cours des deux dernières décennies passées au sein de
                diverses entreprises, j'ai perfectionné mon sens du détail,
                ainsi que ma capacité à produire des livrables à la fois
                communicants, harmonieux et respectueux des différentes chartes
                graphiques.
              </p>
            </div>

            <div
              class="section-texte"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h4>Ces temps-ci</h4>
              <p>
                Début 2023, j’ai entamé ma reconversion dans l’univers du
                développement web, où le graphisme rencontre le code. Pendant 4
                mois, j’ai suivi à temps complet la
                <b>formation «&nbsp;Développeur .NET fullstack&nbsp;»</b> chez
                M2i, qui s’est ensuite conclue par un mois de stage, en juin.
                <br /><br /><b>Mon portfolio, projet phare à ce stade,</b> met
                en lumière les réalisations issues de cette période de stage,
                principalement orientées vers l'intégration et le développement
                front-end.
              </p>
            </div>
            <div
              class="section-texte"
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <h4>Mon futur</h4>
              <p>
                Bien que mon immersion dans ce nouvel univers soit récente, j’ai
                à cœur de progresser et d’apprendre tous les jours un peu plus.
                J’ai d'ailleurs décidé de continuer mon apprentissage en
                alternance avec la
                <b>3W Academy</b>, au rythme de 3 semaines en entreprise et une
                semaine en cours. <br /><br />
                Je suis toujours très attirée par le domaine du graphisme et je
                nourris le désir d'élargir mes compétences. Ainsi, je suis
                ouverte à deux voies passionnantes :
                <b>l'UX/UI </b>car j'ai pris conscience au fil des ans que c'est
                un fondement essentiel d'un site ou d'une application mais aussi
                <b>le rôle d'intégratrice développeuse front-end</b> qui serait
                la continuité de mon métier initial de maquettiste.
                <br /><br />N’hésitez pas à me
                <a href="#contact" class="link-text"><b>contacter</b></a> si mon
                profil vous intéresse (et si vous êtes sur la métropole lilloise
                ou accessible facilement en transports depuis celle-ci)&nbsp;!
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
                </div>
              </div>
            </div>
            <div
              class="container-hardSkills-titre"
              data-aos="fade-left"
              data-aos-duration="600"
            >
              <div class="titre-skills"><h4>Savoir-être</h4></div>
              <div class="container-hardSkills">
                <ul>
                  <li>Réactive</li>
                  <li>Rigoureuse</li>
                  <li>Créative</li>
                  <li>Perséverante</li>
                  <li>À l'écoute / empathique</li>
                  <li>Sens de l'organisation</li>
                  <li>Maîtrise avancée du français</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container-button">
          <a :href="cvURL" target="_blank" download="fchambinaud.pdf"
            ><button class="btn">Plus de détails sur mon cv</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.espace-nav {
  padding-top: 3rem;
  background: linear-gradient(to bottom, #1c657c, #1c4856 50%, #1c4856 50%);
  width: 100%;
  position: relative;
}
.espace-nav::after {
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
}
#head {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.titre {
  width: 100%;
  z-index: 1;
  color: #fff;
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
  color: white;
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
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
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
}
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
  border-top: 5px solid #e05900;
  border-bottom: 5px solid #e05900;
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
  border: 2px #fff solid;
  background: none;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  position: relative;
  overflow: hidden;
  z-index: 1;
}
button::before,
button::after {
  border-radius: 2rem;
  background-color: #e05900;
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
    flex-direction: column;
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
    column-gap: 0;
  }
  .paves-textes,
  .container-hardSkills-titre {
    width: 44rem;
  }
}
</style>