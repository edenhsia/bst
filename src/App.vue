<template>
  <h1 class="text-h4">Block studio test</h1>
  <SectionMarquee />
  <SectionContact />
  <MainFooter />
</template>

<script>
import SectionMarquee from './components/SectionMarquee.vue'
import SectionContact from './components/SectionContact.vue'
import MainFooter from './components/MainFooter.vue'

export default {
  components: { SectionMarquee, SectionContact, MainFooter },
}
</script>
