<script setup>
// import { ref, onMounted, onBeforeUnmount } from "vue";

// const remonte = () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//   });
// };
// const scroll = ref(0);
// const handleScroll = () => {
//   scroll.value = window.scrollY;
//   console.log("handle scroll", scroll.value);
// };

// onMounted(() => {
//   window.addEventListener("scroll", handleScroll, remonte);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", handleScroll, remonte);
// });

import { onMounted, onBeforeUnmount } from "vue";

// const remonte = () => {
//   window.scrollTo({
//     top: 0,
//     left: 0,
//   });
// };
// const scroll = ref(0);
// const handleScroll = () => {
//   scroll.value = window.scrollY;
//   console.log("handle scroll", scroll.value);
// };

onMounted(() => {
  // window.addEventListener("scroll", handleScroll, remonte);
  window.scrollTo({
    top: 0,
    left: 0,
  });
});

onBeforeUnmount(() => {
  // window.removeEventListener("scroll", handleScroll, remonte);
  window.scrollTo({
    top: 0,
    left: 0,
  });
});
</script>
  
  <template>
  <div class="englobeur-first">
    <div class="text-photo" :style="{ transform: `translateY(-${scroll}px)` }">
      <div class="text">
        <Transition appear name="slide-fade1">
          <div class="bienvenue">Hello ! Je suis Fred,</div>
        </Transition>
        <Transition appear name="slide-fade2">
          <div class="portfolio">DESIGNER UX/UI</div>
        </Transition>
      </div>
      <transition appear name="photo-fade">
        <div class="container-photo" data-scroll data-scroll-speed="-1">
          <img
            src="../assets/profil-carre-222.jpg"
            alt="photo profil"
            class="photo2"
          />
        </div>
      </transition>
    </div>
    <div class="btn-continue">
      <a href="#head">
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
  /* background: linear-gradient(to top, #1c657c, #1c4856 50%, #1c4856 50%); */
  /* background: rgb(238 247 248); */
  background: #f7feff;
  /* background: linear-gradient(to top, #1c657c, #f7feff 50%, #f7feff 50%); */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.text-photo {
  gap: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.photo2 {
  border: #e05900 3px solid;
  height: 18rem;
  width: 18rem;
  border-radius: 10rem;
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
  align-items: center;
  gap: 0.8rem;
  border-bottom: #e05900 3px solid;
  padding-top: 1.2rem;
  border-top: #e05900 3px solid;
}
.bienvenue {
  color: #1c657c;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 1rem;
}
.portfolio {
  color: #1c657c;
  font-weight: 600;
  font-size: 2.5rem;
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
button {
  padding: 0.7rem 1.1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1.1rem;
  border: 2px #ffffff solid;
  background: none;
  font-weight: 600;
  position: relative;
  color: white;
  overflow: hidden;
  z-index: 1;
}
button::before,
button::after {
  border-radius: 2rem;
  background-color: #397a89;
  content: "";
  position: absolute;
  z-index: -1;
}
button:hover {
  color: #fff;
}
.btn-rond::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-rond::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-rond:hover::after {
  width: 100%;
}
.btn-continue {
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 2rem;
}
.btn-rond {
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  background-color: #e05900;
}
@media (min-width: 430px) {
  .photo2 {
    height: 21rem;
    width: 21rem;
    border-radius: 10rem;
  }
  .bienvenue {
    font-size: 2.2rem;
    line-height: 2rem;
  }
  .portfolio {
    font-size: 3.4rem;
  }
}
@media (min-width: 768px) {
  .englobeur-first {
    padding: 10rem 0;
  }
  .text-photo {
    gap: 8rem;
  }
  .photo2 {
    height: 21rem;
    width: 21rem;
    border-radius: 10rem;
  }
  .text {
    /* border-bottom: #e05900 4px solid; */
    padding-top: 1.7rem;
    /* border-top: #e05900 4px solid; */
  }
  .bienvenue {
    font-size: 2.6rem;
  }
  .portfolio {
    font-size: 4rem;
  }
}
@media (min-width: 1135px) {
  .englobeur-first {
    padding: 0;
  }
  .text-photo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    max-width: 1250px;
    gap: 0;
    padding: 0 4rem;
  }
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1;
    grid-row: 1;
    width: fit-content;
    /* border-bottom: #e05900 6px solid; */
    /* border-top: #e05900 6px solid; */
    margin: auto;
  }
  .container-photo {
    grid-column: 2;
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  /* .photo2 {
    height: 24rem;
    width: 24rem;
    border-radius: 20rem;
    border: #e05900 6px solid;
  } */
  .bienvenue {
    font-size: 2.8rem;
    padding-top: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5rem;
  }
  .portfolio {
    padding-top: 0.4rem;
    font-size: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>