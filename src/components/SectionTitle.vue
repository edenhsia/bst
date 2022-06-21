<template>
  <h2 class="section-title text-h3">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.section-title {
  @apply flex items-center uppercase;

  &::before {
    @apply content-['/'] mr-3 md:mr-4;
  }
}
</style>
