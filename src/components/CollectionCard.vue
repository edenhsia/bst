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
.collection-card {
  @apply overflow-hidden;
  .image img {
    @apply absolute w-full h-full left-0 top-0 object-cover transition-transform duration-300;
  }
  .btn {
    @apply bg-secondary-lighter shadow px-10 py-4 rounded-full whitespace-nowrap;
    @apply absolute bottom-6 left-1/2 -translate-x-1/2 transition-colors duration-300;
  }

  &:hover {
    @apply cursor-pointer;
    .image img {
      @apply scale-110;
    }

    .btn {
      @apply bg-secondary text-white;
    }
  }

  &:active .btn {
    @apply bg-primary shadow-none;
  }
}
</style>
