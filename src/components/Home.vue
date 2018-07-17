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
    background: url('/assets/back.png') 100% #1f2139 ;
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
