<script setup>
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
  <div class="englobeur-first" id="first">
    <div class="text-photo" :style="{ transform: `translateY(-${scroll}px)` }">
      <transition appear name="photo-fade">
        <div class="container-photo" data-scroll data-scroll-speed="-1">
          <img
            src="../assets/profil-carre-222.jpg"
            alt="photo profil"
            class="photo2"
          />
        </div>
      </transition>
      <div class="text">
        <Transition appear name="slide-fade1">
          <div class="bienvenue">Hello ! Je suis Fred,</div>
        </Transition>
        <Transition appear name="slide-fade1">
          <div class="portfolio">DESIGNER UX/UI</div>
        </Transition>
        <Transition appear name="slide-fade2">
          <div class="texte-prez-first">
            Spécialisée en UX design, j’ai obtenu une certification chez UX
            France et Dthinking, développant des compétences clés comme
            <b
              >les entretiens utilisateurs, la création de personas,
              d’experience maps, la conception de userflows et le wireframing</b
            >. <br />J'intègre des
            <b>tests utilisateurs synchrones et asynchrones</b> pour affiner les
            expériences et m’appuie sur une
            <b>formation en développement web</b> pour anticiper les contraintes
            techniques. <br /><b>Mon expérience en maquettage</b> m'a appris à
            structurer des interfaces efficaces, en utilisant l’<b
              >atomic design</b
            >
            et les design tokens pour garantir
            <b>cohérence et accessibilité</b>, toujours dans un cadre de travail
            collaboratif.
          </div>
        </Transition>
        <div class="container-button">
          <a :href="cvURL" target="_blank" download="CV-fchambinaud.pdf"
            ><button class="btn">Plus de détails sur mon cv</button></a
          >
        </div>
      </div>
    </div>
    <div class="btn-continue">
      <a href="#reals">
        <button class="btn-rond">
          <span class="material-symbols-rounded">
            keyboard_double_arrow_down
          </span>
        </button></a
      >
    </div>
  </div>
</template>
<style scoped>
.englobeur-first {
  /* background: #1a1e36;
  background: linear-gradient(to top, #242949, #1a1e36 50%, #1a1e36 50%); */
  background: #fff;

  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text-photo {
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.photo2 {
  /* border: #c5b2a9 3px solid;
  border: #1a1e36 3px solid; */
  height: 14rem;
  width: 14rem;
  border-radius: 10rem;
  margin-top: 5rem;
}
.photo-fade-enter-active {
  transition: all 2.3s ease-out;
}
.photo-fade-enter-from {
  opacity: 0;
}
.text {
  font-family: "Montserrat", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;
  /* border-top: #c5b2a9 3px solid;
  border-top: #1a1e36 3px solid; */
  padding: 1.5rem 0;
  /* border-bottom: #c5b2a9 3px solid;
  border-bottom: #1a1e36 3px solid; */
  margin: 0 2rem;
}
.bienvenue {
  color: #c5b2a9;
  color: #1a1e36;

  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1rem;
  /* font-size: 2.8rem;
  padding-top: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5rem; */
}
.portfolio {
  color: #c5b2a9;
  color: #1a1e36;
  color: #353051;

  font-weight: 600;
  font-size: 2.5rem;
  line-height: 1.3;
}
.texte-prez-first {
  color: #1a1e36;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5;
  margin-top: 0.5rem;
}
.slide-fade1-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.slide-fade2-enter-active {
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: 0.4s;
}

.slide-fade1-enter-from,
.slide-fade2-enter-from {
  transform: translateX(-10rem);
  opacity: 0;
}
button,
button::after {
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

button::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
button::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
button:hover::after {
  width: 100%;
}
.btn-continue {
  display: none;
  /* align-items: center;
  position: absolute;
  bottom: 2rem; */
}
.btn-rond {
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
}
.container-button {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}

button {
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  border: 2px #353051 solid;
  /* background: none; */
  background-color: #353051;
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

@media (min-width: 430px) {
  .text-photo {
    gap: 1rem;
  }
  .photo2 {
    height: 16rem;
    width: 16rem;
  }
  .bienvenue {
    font-size: 2.2rem;
    line-height: 1.5rem;
  }
  .portfolio {
    font-size: 3.4rem;
    line-height: 1.1;
  }
  .texte-prez-first {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
}
@media (min-width: 768px) {
  .englobeur-first {
    padding: 10rem 0;
  }
  /* .text-photo {
    gap: 8rem;
  } */
  .photo2 {
    height: 21rem;
    width: 21rem;
    margin-top: 0;
  }
  .text {
    /* border-bottom: #e05900 4px solid; */
    /* padding-top: 1.7rem; */
    margin: 0 6rem;
    padding: 2rem 0;
    /* border-top: #e05900 4px solid; */
  }
  .bienvenue {
    font-size: 2.6rem;
  }
  .portfolio {
    font-size: 4rem;
  }
  .texte-prez-first {
    margin-top: 1.5rem;
  }
  .container-button {
    margin: 2rem 0;
  }
  .btn-continue {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 2rem;
  }
}
@media (min-width: 1135px) {
  .englobeur-first {
    padding: 0;
  }

  .text-photo {
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    width: 100%;
    /* max-width: 1250px; */
    max-width: 1500px;
    gap: 0;
    padding: 0 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .text {
    display: flex;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;
    width: fit-content;
    margin: 0;
  }
  .container-photo {
    /* grid-column: 2;
    grid-row: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }
  .bienvenue {
    font-size: 3rem;
    padding-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5rem;
  }
  .portfolio {
    padding-top: 0.4rem;
    font-size: 4rem;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .texte-prez-first {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 500;
  }
}
</style>