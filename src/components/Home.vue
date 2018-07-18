<template>
    <div id="Home" class="home">
        <h1>SANJEEV MALAGI</h1>
        <h2>Full-Stack Web Developer </h2>
        <SocialLinks />
    </div>
</template>
<script>
import SocialLinks from './SocialLinks.vue'

export default {
  name: 'Home',
  components: {
    SocialLinks
  }
}
</script>
<style scoped>
.home{
    background: rgb(44,46,80);
    background: radial-gradient(circle, rgba(44,46,80,1) 0%, rgba(31,33,57,1) 100%);
    color: aliceblue;
    padding-top: 200px;
    padding-bottom: 100px;
    text-align: center;
}
h1 {
  font-size: 2.4em;
  font-weight: 600;
  margin: auto;
}
h2{
  font-size: 1.4em;
}
</style>
