<template>
  <div class="foot">
    <p>Site réalisé sur Vue.js</p>
    <p>© Frédérique Chambinaud 2023-2024</p>
  </div>
</template>
<style scoped>
.foot {
  padding: 0.7rem;
  /* background-color: rgb(238 247 248); */
  /* background: #f7feff; */
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-top: 1px solid #454063; */
  line-height: 1rem;
  min-width: 100%;
}
p {
  color: #1c657c;
  color: #1a1e36;
  font-size: 0.8rem;
  padding: 0.1rem 0rem;
}
@media screen and (min-width: 768px) {
  .foot {
    padding: 0.7rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    line-height: 1.6rem;
  }
  p {
    font-size: 0.9rem;
    padding: 0.1rem 1rem;
  }
}
</style>