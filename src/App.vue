<template>
  <v-app>
    <v-main>
      <Hero/>
      <Calculator/>
      <About/>
      <Contact/>
      <Faq/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Calculator from './components/Calculator.vue';
import Contact from './components/Contact.vue';
import Faq from './components/Faq.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue'

export default {
  name: 'App',

  components: {
    Hero,
    Calculator,
    About,
    Contact,
    Faq,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>
