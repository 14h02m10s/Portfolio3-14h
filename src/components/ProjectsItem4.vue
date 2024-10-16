<script>
// ca marche mais je n'ai pas encore mis la transition sur les blocs textes quand ils s'agrandissent

// export default {
//   data() {
//     return {
//       isExpanded: false,
//     };
//   },
//   methods: {
//     toggleExpansion() {
//       this.isExpanded = !this.isExpanded;
//     },
//   },
// };
</script>

<template>
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <div class="section-texte">
      <h4>
        <slot name="sous-titre"></slot>
      </h4>
      <p class="content">
        <slot></slot>
      </p>
      <!-- <div class="btn-continue">
        <span
          class="btn-open-text material-symbols-rounded"
          @click="toggleExpansion"
          :class="{ expanded: isExpanded }"
        >
          keyboard_double_arrow_down
        </span>
      </div> -->
    </div>
  </div>
</template>
  
  <style scoped>
.item {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
  /* max-width: 90%; */
  /* border-top: #e05900 3px solid; */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.2rem 0.2rem 1rem; */
  /* box-shadow: rgba(93, 9, 126, 0.2) 0.4rem 0.4rem 0rem; */
  /* box-shadow: 0.8rem 0.8rem rgb(84, 5, 133),
    -1.5rem -1.5rem 0 rgba(215, 201, 193, 0.9); */
  /* box-shadow: 0.8rem 0.8rem #1a1e36, -1.5rem -1.5rem 0 #540585; */
  /* box-shadow: 1rem 0.8rem #1aa308, -0.7rem -0.5rem 0 rgba(28, 101, 124, 1),
    0.8rem 0.8rem 2.2em rgb(138, 127, 145); */
  /* border-radius: 2rem; */
  /* background-color: #e05900; */
  overflow: hidden;
  /* border-bottom: #838e93 1px solid; */
}
.img {
  width: 100%;
  margin: 0;
  padding: 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0.2rem 0.2rem 0.5rem;
}
.section-texte {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 1rem 2rem 0 2rem;
  /* border-top: 1px solid #e05900; */
  /* box-shadow: rgba(0, 0, 0, 0.1) 0.2rem 0.2rem 0.5rem; */

  /* border-bottom: 3px solid #e05900; */
  /* transform: translateY(-0.4rem); */
  /* height: 15rem; */
  position: relative;
  /* background-color: #faf9ff; */
}

/* .btn-continue {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0rem;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.7) 90%,
    rgba(255, 255, 255, 0.2) 100%
  );
  height: 4rem;
  width: 100%;
  border-radius: 2rem;
} */
h4 {
  padding: 0;
  font-weight: 700;
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
  width: 100%;
}
/* .content {
  padding-top: 0.7rem;
} */
@media (min-width: 768px) {
  /* .item {
    width: 43rem;
  }
  .img {
    height: fit-content;
  } */
  h4 {
    font-size: 1.5rem;
  }
}

@media (min-width: 1135px) {
  .item {
    margin: 0;
    flex-direction: row;
    /* height: fit-content; */
    /* max-height: 31rem; */
    min-height: 31rem;
    /* width: 90%; */
  }
  .img {
    /* width: auto; */
    min-width: 60%;
    height: auto;
    /* width: fit-content; */
    /* background-color: #0083bf; */
    /* display: flex;
    flex-grow: 1; */
    /* border-radius: 15px;
    overflow: hidden; */
  }
  /* .btn-continue {
    display: none;
  } */
  h4 {
    font-size: 2rem;
  }
}
</style>