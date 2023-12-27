<template>
  <NavbarDisplay />
  <main>
    <AccordionController />
  </main>
</template>

<script>
import NavbarDisplay from './components/NavbarDisplay.vue';
import AccordionController from './components/AccordionController.vue';

export default {
  name: 'App',
  components: {
    NavbarDisplay,
    AccordionController
  }
}
</script>

<style scoped>
main {
  padding: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
</style>
