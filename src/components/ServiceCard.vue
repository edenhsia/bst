<template>
  <div class="service-card" :class="{ 'flex flex-col-reverse': reverse }">
    <div class="icon">
      <img :src="icon" alt="service icon" />
    </div>
    <div class="text">
      <h3 class="text-h4 text-gray-dark mb-4 font-optima-bold">
        <slot name="title">
          Multinational <br />
          Service Base
        </slot>
      </h3>
      <p class="text-b1 text-gray-dark">{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    reverse: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
.service-card {
  @apply w-1/2 min-w-[19.5rem] space-y-4 p-6 md:space-y-6 md:p-10;

  .icon {
    @apply flex items-center h-[11.5rem] md:h-64 md:ml-[3.25rem];
  }
}
</style>
