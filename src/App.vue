<template>
  <Navbar/>
  <router-view/>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  :root {
    --theme-color: #ffa800;
    --theme-color-alpha: rgba(0, 0, 0, 0.841);
    --text-color: rgb(187, 187, 187);
  }
  body::-webkit-scrollbar {
    display: none;
  }
  .text-theme-color {
    color: var(--theme-color);
  }

  .bg-theme-color {
    background: var(--theme-color);
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-attachment: fixed;
    min-height: 100vh;
    background-size: cover;
    background: #f2f2f2;
  }

  nav a {
    text-decoration: none;
    position: relative;
    transition: .5s;
  }

  nav a.router-link-exact-active::after {
    content: '';
    height: 3px;
    border-radius: 20px;
    width: 30%;
    background-color: var(--theme-color);
    position: absolute;
    left: 1.5rem;
    transition: .5s;
  }

  @media screen and (max-width: 800px) {
    nav a.router-link-exact-active::after {
      display: none;
    }
  }

</style>
