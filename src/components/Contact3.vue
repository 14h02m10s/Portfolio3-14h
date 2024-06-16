<script>
import { Clipboard } from "v-clipboard";

export default {
  name: "App",
  data() {
    return {
      isCopied: true,
    };
  },
  methods: {
    ToggleCopied() {
      this.isCopied = !this.isCopied;
    },
  },
};
</script>
<script setup>
import Footer2 from "./Footer2.vue";
</script>

<template>
  <div id="contact">
    <div class="titre">
      <h2>CONTACT</h2>
    </div>
    <div
      class="container-except-titre"
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div class="login-card-container">
        <form
          action="https://public.herotofu.com/v1/8cc09760-7f05-11ee-8bd5-e178f08d9cb2"
          method="post"
          accept-charset="UTF-8"
          class="login-card-form"
        >
          <div class="login-card-form-2">
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded"
                >person</span
              >
              <input
                type="text"
                placeholder="Nom"
                id="nom"
                name="lastName"
                required
              />
            </div>
            <div class="form-item">
              <span class="form-item-icon material-symbols-rounded"
                >person</span
              >
              <input
                type="text"
                placeholder="Prénom"
                id="prenom"
                name="firstName"
                required
              />
            </div>
          </div>

          <div class="form-item">
            <span class="form-item-icon material-symbols-rounded">mail</span>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
          </div>
          <div
            style="
              text-indent: -99999px;
              white-space: nowrap;
              overflow: hidden;
              position: absolute;
            "
            aria-hidden="true"
          >
            <input
              type="text"
              name="_gotcha"
              tabindex="-1"
              autocomplete="off"
            />
          </div>
          <div class="form-item">
            <textarea
              id="message"
              name="message"
              placeholder="Hello Fred, nous serions vraiment ravis de te compter parmi nous ! "
              required
            ></textarea>
          </div>
          <div class="container-btn-envoyer">
            <button type="submit" class="btn">Envoyer</button>
          </div>
        </form>
        <div>
          <p>
            <br />
            <br />
            Si vous préférez utiliser votre boite mail, <br />copiez mon adresse
            mail en cliquant dessus :
            <br />
            <span
              v-clipboard="'fchambinaudpro@gmail.com'"
              @click="ToggleCopied"
              class="hover-list"
              ><b>fchambinaudpro@gmail.com</b></span
            >.
            <br />
          </p>
          <p :class="{ copy: !isCopied, copied: isCopied }">C'est copié !</p>
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
    <div class="z-index">
      <Footer2 />
    </div>
  </div>
</template>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background: linear-gradient(to bottom, #1c657c, #1c4856 50%, #1c4856 50%); */
  background: rgb(238 247 248);
  width: 100%;
  position: relative;
  padding-top: 5.1rem;
  padding-bottom: 4.1rem;
  height: 100vh;
  min-height: 1050px;
}
/* #contact::after {
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
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.3rem 3rem;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
  letter-spacing: 0.1rem;
}
.container-except-titre {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
.login-card-container {
  /* min-height: 80vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem 1.5rem 0rem 1.5rem;
  z-index: 4;
  width: 100%;
}
.login-card-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
}
.login-card-form-2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
}
.login-card-form .form-item {
  position: relative;
}
.login-card-form .form-item .form-item-icon {
  position: absolute;
  top: 0.82rem;
  left: 1.4rem;
  font-size: 1.3rem;
  opacity: 0.4;
}
input[type="text"] {
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  padding-left: calc(1rem * 3.2);
  border-radius: 100px;
  width: 100%;
  transition: background 0.5s;
  border: rgba(28, 101, 124, 0.7) 1px solid;
  border: rgba(170, 170, 170, 0.7) 1px solid;
}
input[type="email"] {
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.5);
  padding: 1rem 1.5rem;
  padding-left: calc(1rem * 3.2);
  border-radius: 100px;
  width: 100%;
  transition: background 0.5s;
  border: #1c657c 1px solid;
  border: rgba(170, 170, 170, 0.7) 1px solid;
}
.form-item {
  width: 100%;
}
input:focus {
  background: white;
  border: #e05900 1px solid;
}
#message {
  border-radius: 20px;
  width: 100%;
  height: 10rem;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.5);
  transition: background 0.5s;
  border: #1c657c 1px solid;
  border: rgba(170, 170, 170, 0.7) 1px solid;
}
#message:focus {
  background: white;
  border: #e05900 1px solid;
}
textarea {
  font-family: "Open sans";
  font-size: 0.9rem;
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
.btn-carre::before,
.btn::before {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-carre::after,
.btn::after {
  height: 100%;
  left: 0;
  top: 0;
  width: 0;
}
.btn-carre:hover::after,
.btn:hover::after {
  width: 100%;
}
p {
  /* font-size: 0.9rem; */
  font-weight: 500;
  /* text-align: justify; */
  margin-bottom: 0.7rem;
  color: #1c657c;
  text-align: center;
}
.copy {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0);
  animation: changerCouleur 2s ease-in-out;
}
@keyframes changerCouleur {
  0% {
    color: rgba(28, 101, 124, 1);
  }
  100% {
    color: rgba(255, 255, 255, 0);
  }
}
.copied {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0);
}
.container-btn-envoyer {
  display: flex;
  justify-content: center;
  padding-top: 2rem;
}
.btn-return {
  display: flex;
  justify-content: right;
  width: 100%;
  position: absolute;
  bottom: 5.5rem;
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
.hover-list {
  font-weight: 600;
  font-size: 1rem;
  color: #e05900;
  /* color: #ffffff; */
  box-shadow: inset 0 0 0 0 #ffffff;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: underline;
}
.hover-list:hover {
  color: #fff;
  box-shadow: inset 250px 0 0 0 #e05900;
  cursor: pointer;
  /* transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out; */
}
/* #contact:target {
  padding-top: 6rem;
  margin-top: -6rem;
} */
/* #contact:target {
  padding-top: 6.1rem;
  margin-top: 0rem;
} */
.z-index {
  z-index: 3;
  bottom: 0;
  position: absolute;
  width: 100%;
}
@media (min-width: 471px) {
  #contact {
    min-height: 1050px;
  }
  /* #contact:target {
    padding-top: 9.056rem;
    margin-top: 0rem;
  } */
}
@media (min-width: 768px) {
  #contact {
    padding-top: 7.5rem;
  }
  /* #contact:target {
    padding-top: 9.056rem;
    margin-top: 0rem;
  } */
  .login-card-container {
    max-width: 44rem;
    padding: 2rem 0rem;
  }
  .login-card-form-2 {
    display: flex;
    flex-direction: row;
  }
}
@media (min-width: 1135px) {
  #contact {
    height: 100vh;
    padding-top: 6.7rem;
  }
  /* #contact:target {
    padding-top: 7rem;
    margin-top: -5rem;
  } */
  .container-except-titre {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  h2 {
    font-size: 2.7rem;
  }
}
</style>