<template>
  <section class="section-concept">
    <div class="relative mb-6 lg:mb-0">
      <div data-aos="fade-right" class="image-main">
        <div class="image">
          <img src="../assets/images/concept-2.png" alt="concept image" />
          <span class="image-text text-d2">
            Pure,<br />
            Organic,<br />
            Natural.
          </span>
        </div>
      </div>
      <div data-aos="fade-left" class="mobile-wrap container">
        <SectionTitle title="concept" />
        <h3 class="text-h1 ml-auto">
          Natural<br />
          Skin<br />
          Products
        </h3>
      </div>
    </div>
    <div class="lg:container">
      <div class="container desktop-wrap">
        <div class="hidden lg:block lg:col-span-1">
          <SectionTitle title="concept" />
        </div>
        <h3 class="hidden text-h1 text-white lg:block lg:col-span-5">
          Natural<br />
          Skin<br />
          Products
        </h3>
        <div class="text-white lg:col-span-3 lg:col-start-4">
          <p class="mb-8">
            Sit elit incididunt Lorem minim ea pariatur anim dolor ut veniam
            amet ad. Ipsum tempor commodo ullamco Lorem incididunt proident nisi
            nostrud dolore. Et labore minim laboris esse amet eu eu exercitation
            ea esse velit tempor culpa.
          </p>
          <div class="flex justify-start">
            <a href="#" class="btn-detail">
              <span class="icon">
                <IconArrow />
              </span>
              <span class="text text-btn">View Detail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/images/concept-1.png"
      alt="concept image"
      class="decoration-image"
    />
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import IconArrow from '../assets/icons/arrow.svg'

export default {
  components: {
    SectionTitle,
    IconArrow,
  },
}
</script>

<style scoped>
.section-concept {
  @apply bg-primary-light pt-[7.5rem] pb-10 relative lg:pb-0 lg:border lg:border-transparent;

  .image-main {
    @apply relative z-10 mb-6 lg:-mb-10 xl:-mb-[7.5rem];

    width: calc(305 / 360 * 100%);

    @screen lg {
      width: calc(50% - 12px);
    }

    .image {
      @apply w-full relative;

      padding-bottom: calc(967 / 708 * 100%);

      > img {
        @apply absolute left-0 top-0 w-full h-full;
      }

      .image-text {
        @apply hidden lg:block;
        @apply absolute left-1/2 -translate-x-1/2 bottom-8 mix-blend-overlay text-primary-light;
      }
    }
  }

  .section-title {
    @apply rotate-90 origin-bottom-left -mt-5 text-white;
  }

  .mobile-wrap {
    @apply absolute z-10 top-1/2 -translate-y-1/2 inset-x-0 mx-auto text-white;
    @apply flex items-start lg:hidden;
  }

  .lg\:container {
    @screen lg {
      @apply absolute z-10 inset-x-0 -translate-y-1/2;

      top: calc(50% + 80px);
    }

    @screen xl {
      top: calc(50% + 120px);
    }
  }

  .desktop-wrap {
    @apply lg:w-1/2 lg:ml-auto lg:mr-0 lg:grid lg:grid-cols-6 lg:gap-6 lg:max-w-none lg:pl-3 lg:pr-0;
  }

  .decoration-image {
    @apply absolute w-[64.722222%] left-full top-0 -translate-x-[67.381974%] -translate-y-[34.9794239%];
    @apply lg:w-[27.916667%] -translate-x-full -translate-y-1/2;
  }

  .btn-detail {
    @apply flex items-center;

    .icon {
      @apply w-12 h-12 flex items-center justify-center border border-white/30 rounded-full mr-3;
      @apply transition-colors duration-300;
      @apply lg:w-16 lg:h-16 lg:mr-6;
    }

    &:hover .icon {
      @apply text-primary bg-white border-white;
    }

    &:active .icon {
      @apply bg-secondary-light border-secondary-light;
    }
  }
}
</style>
