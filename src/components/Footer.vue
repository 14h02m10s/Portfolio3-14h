<template>
  <div class="foot">
    <p><b>Site responsive réalisé sur Vue.js</b></p>
    <p>© Frédérique Chambinaud 2023-2024</p>
  </div>
</template>
<style scoped>
.foot {
  padding: 0.7rem;
  background-color: #116071;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 5px solid #e05900;
  line-height: 1rem;
  min-width: 100%;
}
p {
  color: white;
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