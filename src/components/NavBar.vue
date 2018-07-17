<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand animated bounceInLeft">
    <div class="navbar-item logo">
      <h2> <span>SANJEEV</span> MALAGI</h2>
    </div>
    <div class="navbar-burger burger" data-target="navigationMenu" v-on:click="toggleNavbar">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navigationMenu" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
    <div class="navbar-end animated bounceInRight" v-on:click="toggleNavbar">
        <a class="navbar-item" href="#Home" >Home</a>
        <a class="navbar-item" href="#Projects">Projects</a>
        <a class="navbar-item" href="#About">About</a>
        <a class="navbar-item" href="#Stats">Stats</a>
        <a class="navbar-item" href="#Contact">Contact</a>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive : false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.isActive = !this.isActive;
    }
  }
}
</script>
<style>
.navbar {
    padding: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background: #1f2139;
    color: white;
    border-bottom: grey solid 1px;
    position: fixed;
    top: 0px;
    width: 100%;
}
#navigationMenu {
    background : #1f2139 !important;
}
.navbar-item {
    color: white;
}
.navbar-item:hover{
    color: #00d1b2 !important;
    background : #100f24 !important;
}
.logo{
  font-size: 1.5em;
  font-weight: 900;
}
.logo h2 span{
  color: #00d1b2;
}
</style>
