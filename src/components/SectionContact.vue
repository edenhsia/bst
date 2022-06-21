<template>
  <section class="section-contact">
    <div class="container lg:flex lg:items-center">
      <SectionTitle title="contact us" class="text-primary flex-shrink-0" />
      <div class="relative lg:mx-auto">
        <img
          src="../assets/images/contact-product.png"
          alt="contact product"
          class="contact-product"
        />
        <img
          src="../assets/images/contact-text.svg"
          alt="contact text"
          class="contact-text"
        />
        <a href="#" class="btn-contact">
          <IconMail class="text-white" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import IconMail from '../assets/icons/mail.svg'

export default {
  components: {
    SectionTitle,
    IconMail,
  },
}
</script>

<style scoped>
.section-contact {
  @apply bg-primary-lighter overflow-hidden pt-[3.125rem] pb-[0.875rem] lg:p-0;

  .container::after {
    @apply lg:content-[''] lg:w-[19.1875rem] lg:border-t lg:border-primary;
  }

  .contact-product {
    @apply relative z-10 lg:!max-w-[35.75rem] lg:-my-3;
  }

  .contact-text {
    @apply absolute top-[27%] w-full scale-[120%];
    @apply md:top-[18%];
  }

  .btn-contact {
    @apply w-[6.5rem] h-[6.5rem] rounded-full bg-primary-light absolute inset-0 m-auto z-10;
    @apply flex items-center justify-center transition-colors duration-300;
    @apply hover:bg-secondary active:bg-primary;
    @apply md:w-36 md:h-36;

    svg {
      @apply w-12 h-12;
    }
  }
}
</style>
