<template>
  <div class="collection-card relative">
    <div class="image">
      <img :src="item.image" alt="collection image" />
    </div>
    <a href="#" class="text-b2 btn">
      {{ item.buttonText }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.image img {
  @apply absolute w-full h-full left-0 top-0 object-cover;
}
.btn {
  @apply bg-secondary-lighter shadow px-10 py-4 rounded-full whitespace-nowrap;
  @apply absolute bottom-6 left-1/2 -translate-x-1/2 transition-colors duration-300;
  @apply hover:bg-secondary hover:text-white active:bg-primary active:shadow-none;
}
</style>
