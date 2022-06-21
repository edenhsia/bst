<template>
  <footer class="bg-white text-gray-dark pt-16 pb-[3.25rem] md:pt-[7.5rem]">
    <div class="container md:flex md:items-end">
      <div class="mb-[4.5rem] md:mb-0 md:flex md:items-end">
        <div class="h-6 mb-6 md:h-8 md:mb-0 md:mr-8 lg:mr-[11.125rem]">
          <Logo class="h-full w-auto" />
        </div>
        <ul class="footer-menu flex items-center text-b2">
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Brand Site</a>
          </li>
        </ul>
      </div>
      <span class="md:ml-auto">© Original COSME JAPAN CO.,LTD</span>
    </div>
  </footer>
</template>

<script>
import Logo from '../assets/icons/logo.svg'

export default {
  components: { Logo },
}
</script>

<style scoped>
.footer-menu li {
  a {
    @apply transition-colors duration-300 hover:text-primary;
  }

  + li {
    @apply flex items-center;

    &::before {
      @apply content-['/'] block mx-3 text-gray;
    }
  }
}
</style>
