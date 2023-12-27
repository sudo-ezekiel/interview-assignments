<template>
  <NavbarDisplay />
  <main>
    <h1>Hello world</h1>
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

<style>
main {
  padding: 2rem
}
</style>
