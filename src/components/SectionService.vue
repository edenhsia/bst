<template>
  <section class="section-service">
    <div class="container">
      <SectionTitle
        title="service"
        class="text-gray mb-6 md:text-gray-dark md:mb-14"
      />
    </div>
    <div class="service-card-list">
      <ServiceCard
        content="Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa."
        :icon="iconMap"
      />
      <ServiceCard
        content="Do et reprehenderit exercit reprehendetation excepteur aliqua duis culpa."
        :icon="iconCompass"
        reverse
      />
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import ServiceCard from './ServiceCard.vue'
// import IconMap from '../assets/icons/map.svg'

export default {
  components: {
    SectionTitle,
    ServiceCard,
  },
  computed: {
    iconMap() {
      return new URL('../assets/icons/map.svg', import.meta.url).href
    },
    iconCompass() {
      return new URL('../assets/icons/compass.svg', import.meta.url).href
    },
  },
}
</script>

<style scoped>
.service-card-list {
  @apply border-y border-gray-light flex divide-x divide-gray-light;
  @apply overflow-x-auto md:overflow-x-hidden;

  .service-card {
    @apply flex-shrink-0;
  }
}
</style>
