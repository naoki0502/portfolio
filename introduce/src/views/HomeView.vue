<template>
  <v-app>
    <NavBar/>
    <Welcome id="welcome"/>
    <AboutMe id="aboutMe"/>
    <Skills id="skills"/>
    <Works id="works" />
    <Footer />
  </v-app>
</template>

<script>
  import NavBar from '../components/NavBar'
  import AboutMe from '../components/AboutMe'
  import Skills from '../components/Skills'
  import Welcome from '../components/Welcome'
  import Works from '../components/Works'
  import Footer from '../components/Footer'

  export default {
    name: 'Home',

    components: {
      NavBar,
      AboutMe,
      Skills,
      Welcome,
      Works,
      Footer
    },

    data:()=>({
    }),
  }
</script>

<style>
</style>