<template>
  <h1 class="text-h4">Block studio test</h1>
  <SectionCollection class="mb-[7.5rem] md:mb-40" />
  <SectionService />
  <SectionMarquee />
  <SectionContact />
  <MainFooter />
</template>

<script>
import SectionCollection from './components/SectionCollection.vue'
import SectionService from './components/SectionService.vue'
import SectionMarquee from './components/SectionMarquee.vue'
import SectionContact from './components/SectionContact.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  components: {
    SectionCollection,
    SectionService,
    SectionMarquee,
    SectionContact,
    MainFooter,
  },
}
</script>
