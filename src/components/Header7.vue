<script>
export default {
  data() {
    return {
      isResponsiveMenu: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isResponsiveMenu = !this.isResponsiveMenu;
    },
  },
};
</script>
<template>
  <div class="container1">
    <div class="orange">
      <a href="./">
        <h1>Frédérique CHAMBINAUD</h1>
      </a>
      <div class="menu-points">
        <a href="javascript:void(0);" class="icon" @click="toggleMenu">
          <img src="../assets/ellypsis-vertical-2.svg" alt="picto menu" />
        </a>
      </div>
    </div>
    <nav :class="{ blue: !isResponsiveMenu, responsive: isResponsiveMenu }" id="menu-blue">
      <a href="#first" @click="toggleMenu">
        <p>Présentation</p>
      </a>
      <!-- <a href="#/realisations" @click="toggleMenu"><p>Réalisations</p></a> -->
      <a href="#reals" @click="toggleMenu">
        <p>Réalisations</p>
      </a>
      <!-- <a href="#/contact" @click="toggleMenu"><p>Contact</p></a> -->
      <a href="#contact" @click="toggleMenu">
        <p>Contact</p>
      </a>
      <div class="picto">
        <!-- <a
          href="https://github.com/14h02m10s?tab=repositories"
          target="_blank"
          @click="toggleMenu"
        >
          <img src="../assets/pictos/github-blanc.svg" alt="Picto git" />
        </a> -->
        <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9rique-c-16195121b/" target="_blank" @click="toggleMenu">
          <img src="../assets/pictos/linkedin-blanc.svg" alt="Picto linkedin" />
        </a>
      </div>
    </nav>
  </div>
</template>

<style scoped>
* {
  font-family: "Montserrat", sans-serif;
}

.container1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 10;
}

.orange {
  background-color: #1a1e36;
  background-color: #353051;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.9rem 1.5rem;
  text-align: left;
  height: 3.1rem;
  /* box-shadow: rgba(0, 0, 0, 0.3) 0.5rem 0.5rem 2rem; */
  backdrop-filter: blur(4px);
  z-index: 2;
}

.menu-points {
  height: 1.5rem;
}

.menu-points img {
  height: 1.5rem;
}

nav {
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}

nav a {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  padding: 2rem 0.7rem;
  border-left: 0px solid rgba(33, 157, 178, 0.3);
  color: #fff;
  transition: 0.4s;
}

nav a p:hover {
  transform: scale(1.03);
}

h1:hover {
  transform: scale(1.03);
}

nav a:first-of-type {
  border: 0;
}

h1 {
  font-weight: 700;
  font-size: 1.15rem;
  color: #fff;
}

/* .picto img {
  height: 2.5rem;
  margin-top: 3rem;
  margin-right: 0.7rem;
  margin-left: 0.7rem;
} */
.picto img {
  height: 2.8rem;
  margin-top: 3rem;
  margin-right: 2rem;
  margin-left: 2rem;
}

.picto img:hover {
  transform: scale(1.08);
}

.blue {
  display: flex;
  justify-content: center;
  /* background: rgb(238 247 248 / 90%); */
  /* background: rgb(247, 254, 255 / 90%); */
  /* background-color: rgba(247, 254, 255, 0.9); */
  background-color: rgba(53, 48, 81, 0.9);
  padding: 0 1.5rem;
  margin-top: -50px;
  /* box-shadow: rgba(162, 162, 162, 0.2) 0rem 0.3rem 0.5rem; */
  backdrop-filter: blur(4px);
  height: 100vh;
}

.responsive a {
  display: none;
}

@media (min-width: 471px) {
  h1 {
    font-size: 1.3rem;
  }
}

@media (min-width: 768px) {
  .menu-points {
    display: none;
  }

  .picto {
    display: flex;
    flex-direction: row;
  }

  .picto a {
    padding: 0 0.5rem;
  }

  .picto img {
    height: 1.6rem;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  nav a {
    padding: 0 0.7rem;
    /* border-left: 1px solid rgba(255, 255, 255, 0.3); */
    border-left: 1px solid #1c657c;
  }

  .container1 {
    display: grid;
    grid-template-columns: 3fr 5fr;
    color: white;
    height: 5.5rem;
    /* box-shadow: rgba(0, 0, 0, 0.3) 0.5rem 0.5rem 2rem; */
  }

  nav {
    padding: 1rem 0;
  }

  h1 {
    font-weight: 700;
    text-align: left;
  }

  .orange {
    background-color: #1a1e36;
    /* background-color: #454063; */

    display: flex;
    align-items: center;
    justify-content: left;
    height: fit-content;
    height: 5.5rem;
    /* box-shadow: rgba(0, 0, 0, 0) 0.5rem 0.5rem 2rem; */
  }

  .blue,
  .responsive {
    background-color: #1a1e36;
    background-color: #353051;

    padding: 0.9rem;
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0) 0.5rem 0.5rem 2rem;
    backdrop-filter: blur(4px);
    margin-top: 0;
    height: 5.5rem;
  }

  .blue a,
  .responsive a {
    display: block;
    font-size: 1.1rem;
  }
}

@media (min-width: 1135px) {
  .container1 {
    height: 3.7rem;
  }

  .orange {
    height: 3.7rem;
  }

  .blue,
  .responsive {
    height: 3.7rem;
  }
}
</style>
