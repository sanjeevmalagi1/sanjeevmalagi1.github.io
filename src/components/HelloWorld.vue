<template>
  <div class="">
    <Navbar />
    <Home />
    <Projects />
    <Modal />
    <About />
    <Stats />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './NavBar.vue'
import Home from './Home.vue'
import Projects from './Projects.vue'
import About from './About.vue'
import Stats from './Stats.vue'
import Contact from './Contact.vue'
import Footer from './Footer.vue'
import Modal from './Modal.vue';

export default {

  name: 'HelloWorld',
  components: {
    Navbar,
    Home,
    Projects,
    About,
    Stats,
    Contact,
    Footer,
    Modal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
