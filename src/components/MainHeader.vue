<template>
  <header class="main-header">
    <div class="container">
      <div class="pt-8 flex items-start">
        <a href="/" class="logo">
          <Logo class="h-6 w-auto md:h-8" />
          <h1 class="sr-only">Original</h1>
        </a>
        <button
          class="hamburger relative z-10 lg:hidden"
          :class="{ active: menuOpened }"
          @click="menuOpened = !menuOpened"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <ul
          class="header-menu"
          :class="
            menuOpened
              ? 'inset-0 overflow-y-auto'
              : 'inset-full overflow-hidden'
          "
        >
          <li
            v-for="(link, i) in links"
            :key="i"
            class="text-b2"
            @click="menuOpened = false"
          >
            <a :href="link.link">{{ link.label }}</a>
          </li>
          <li class="link-shop text-b2" @click="menuOpened = false">
            <a href="#">
              <IconShop class="mr-1" />
              <span>Shop</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../assets/icons/logo.svg'
import IconShop from '../assets/icons/shop.svg'

export default {
  components: { Logo, IconShop },
  data: () => ({
    menuOpened: false,
  }),
  computed: {
    links() {
      return [
        {
          link: '#',
          label: 'About',
        },
        {
          link: '#',
          label: 'How to',
        },
        {
          link: '#',
          label: 'Product',
        },
      ]
    },
  },
}
</script>

<style scoped>
.logo {
  @apply block text-gray-darker mt-2.5 mr-auto transition-colors duration-300 hover:text-primary;
}

.hamburger {
  @apply bg-secondary-lighter p-4 rounded-full shadow transition-colors duration-300;

  .hamburger-box {
    @apply block py-1 relative;
  }
  .hamburger-inner {
    @apply block bg-primary-light w-4 h-px transition-all;

    &::before,
    &::after {
      @apply content-[''] absolute border-t border-primary-light right-0 transition-all duration-300;
    }

    &::before {
      @apply top-0 w-full;
    }

    &::after {
      @apply bottom-0 w-2.5;
    }
  }

  &:hover {
    @apply bg-secondary shadow-none;

    .hamburger-box .hamburger-inner {
      @apply bg-white;

      &::before,
      &::after {
        @apply border-white;
      }
    }
  }

  &.active {
    @apply bg-secondary;
    .hamburger-box .hamburger-inner {
      @apply bg-secondary transition-none duration-[0s];

      &::before,
      &::after {
        @apply border-white;
      }

      &::before {
        @apply rotate-[30deg] origin-top-left;
      }

      &::after {
        @apply w-full -rotate-[30deg] origin-bottom-left;
      }
    }
  }
}

.header-menu {
  @apply bg-secondary-lighter fixed text-center py-20 transition-all duration-300;
  @apply lg:static lg:px-10 lg:py-4 lg:flex lg:items-center lg:rounded-full lg:shadow;

  li {
    + li:not(.link-shop) {
      @apply lg:ml-10;
    }

    a {
      @apply block py-4 text-gray-darker transition-colors duration-300 hover:text-primary;
      @apply lg:py-0;
    }
  }
  .link-shop a {
    @apply flex items-center justify-center;

    @screen lg {
      &::before {
        @apply content-['/'] mx-6 text-primary-light;
      }
    }
  }
}
</style>
