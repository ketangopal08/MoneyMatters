<template>
  <div class="relative min-h-screen w-full">
 
    <!-- Hero Content (centered) -->
    <SectionOne />
  </div>

  <!-- Section 2: Features (below hero) -->
  <SectionTwo />
  <!-- Section 3: CTA or Info -->
  <SectionThree />
</template>

<script>
import SectionOne from '~/components/sections/SectionOne.vue';
import SectionTwo from '~/components/sections/SectionTwo.vue';
import SectionThree from '~/components/sections/SectionThree.vue';

export default {
  name: 'LandingPage',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  }
}
</script>

<style>
/* Add any custom styles here if needed */
</style>