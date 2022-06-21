<template>
  <div class="marquee-wrap whitespace-nowrap inline-block">
    <div v-for="i in 3" :key="i" class="marquee-text text-d1">
      <span>Pure</span>
      <span>Organic</span>
      <span>Frangrance Free</span>
    </div>
  </div>
</template>

<style scoped>
.marquee-text {
  @apply text-secondary inline-block whitespace-nowrap pt-4 pb-5 md:py-2;

  span {
    + span {
      &::before {
        @apply content-['/'] mx-4 md:mx-8;
      }
    }
  }

  + .marquee-text {
    @apply ml-8 md:ml-16;
  }
}
</style>
