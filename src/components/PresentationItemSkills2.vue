<template>
  <div class="item">
    <div class="img">
      <slot name="image"></slot>
    </div>

    <div class="details">
      <p>
        <slot name="texte"></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0.3rem;
  width: fit-content;
}
.details {
  font-weight: 600;
  font-size: 0.9rem;
}
.img {
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
}

@media (min-width: 768px) {
  .details {
    font-size: 1rem;
  }
}
</style>
