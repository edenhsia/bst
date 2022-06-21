<template>
  <SectionConcept class="mb-[7.5rem] md:mb-80" />
  <SectionCollection class="mb-[7.5rem] md:mb-40" />
  <SectionService />
  <SectionMarquee />
  <SectionContact />
  <MainFooter />
</template>

<script>
import SectionConcept from './components/SectionConcept.vue'
import SectionCollection from './components/SectionCollection.vue'
import SectionService from './components/SectionService.vue'
import SectionMarquee from './components/SectionMarquee.vue'
import SectionContact from './components/SectionContact.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  components: {
    SectionConcept,
    SectionCollection,
    SectionService,
    SectionMarquee,
    SectionContact,
    MainFooter,
  },
}
</script>
