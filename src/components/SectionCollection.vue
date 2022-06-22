<template>
  <section class="section-collection">
    <div class="container md:relative">
      <SectionTitle
        title="collection"
        class="text-gray mb-6 md:text-gray-dark"
      />
      <div class="collection-list">
        <CollectionCard
          v-for="(item, i) in items"
          :key="i"
          :item="item"
          data-aos="flip-left"
        />
      </div>
      <div class="flex justify-end">
        <a href="#" class="btn-all">
          <span class="icon">
            <IconArrow />
          </span>
          <span class="text text-btn">View All</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import CollectionCard from './CollectionCard.vue'
import IconArrow from '../assets/icons/arrow.svg'

export default {
  components: {
    SectionTitle,
    CollectionCard,
    IconArrow,
  },
  computed: {
    items() {
      return [
        {
          image: new URL('../assets/images/collection-1.png', import.meta.url)
            .href,
          buttonText: 'Face Balm',
        },
        {
          image: new URL('../assets/images/collection-2.png', import.meta.url)
            .href,
          buttonText: 'Hand Cream',
        },
        {
          image: new URL('../assets/images/collection-3.png', import.meta.url)
            .href,
          buttonText: 'Face Balm',
        },
        {
          image: new URL('../assets/images/collection-4.png', import.meta.url)
            .href,
          buttonText: 'Hand Cream',
        },
      ]
    },
  },
}
</script>

<style scoped>
.section-title {
  @apply md:absolute md:top-[7.375rem];
}
.collection-list {
  @apply space-y-2 mb-10 md:space-y-0 md:flow-root md:mb-1.5;
  .collection-card {
    :deep() .image {
      padding-bottom: calc(365 / 312 * 100%);
    }

    @screen md {
      @apply float-left;

      &:first-child {
        @apply mr-6 mt-[17.375rem];

        width: calc(1 / 4 * 100% - 16px);
        :deep() .image {
          padding-bottom: calc(364 / 282 * 100%);
        }
      }

      &:nth-child(2) {
        @apply mr-6 mt-[7.375rem];

        width: calc(5 / 12 * 100% - 16px);
        :deep() .image {
          padding-bottom: calc(655 / 486 * 100%);
        }
      }

      &:nth-child(3) {
        @apply mb-6;

        width: calc(1 / 3 * 100% - 16px);

        :deep() .image {
          padding-bottom: calc(296 / 384 * 100%);
        }
      }

      &:last-child {
        width: calc(1 / 4 * 100% - 16px);
        :deep() .image {
          padding-bottom: calc(301 / 282 * 100%);
        }
      }
    }
  }
}

.btn-all {
  @apply flex items-center;

  .icon {
    @apply w-12 h-12 flex items-center justify-center border border-gray rounded-full mr-3;
    @apply transition-colors duration-300;
    @apply md:w-16 md:h-16 md:mr-6;
  }

  .text {
    @apply transition-colors duration-300;
  }

  &:hover {
    .icon {
      @apply text-white bg-secondary border-secondary;
    }

    .text {
      @apply text-secondary;
    }
  }

  &:active {
    .icon {
      @apply bg-primary border-primary;
    }

    .text {
      @apply text-primary;
    }
  }
}
</style>
