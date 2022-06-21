<template>
  <section class="section-marquee">
    <div class="container">
      <SectionTitle
        title="marquee"
        class="text-gray-dark hidden md:flex md:mb-[6.625rem]"
      />
    </div>
    <div class="border-y border-gray-light">
      <MarqueeText />
      <hr class="border-gray-light" />
      <MarqueeText />
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import MarqueeText from './MarqueeText.vue'

export default {
  components: {
    SectionTitle,
    MarqueeText,
  },
}
</script>

<style scoped>
@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0%);
  }
}

.section-marquee {
  @apply overflow-hidden pt-[12.5rem] pb-[11.125rem] md:pt-[4.375rem] md:pb-[12.5rem];

  .marquee-wrap {
    @apply pl-[100%];

    &:first-child {
      @apply animate-[marquee-left_20s_linear_infinite_forwards];
    }

    &:last-child {
      @apply animate-[marquee-right_20s_linear_infinite_forwards];
    }
  }
}
</style>
