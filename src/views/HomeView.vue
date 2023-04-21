<template>
  <section class="home d-flex align-items-center">
      <div class="content d-flex flex-column justify-content-start text-white">
        <h2 class="greeting text-start">Hi, <span class="theme-text-color">I am</span></h2>
        <h1 class="fullname text-start">Lazola  <span class="theme-text-color"> Makubalo</span></h1>
        <p class="role-description text-start lead">Software / Web Developer</p>
        <div class="buttons text-start d-flex gap-3 mt-5">
          <button class="btn-hire-me theme-bg-color text-white">Hire me</button>
          <button class="btn-download-cv theme-text-color">Download CV</button>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>


<style scoped>
  .home {
    min-height: 100dvh;
    height: auto;
    padding-top: 9vh; 
    object-fit: cover;
    background: linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),
      url(https://i.postimg.cc/9F6NsGm9/image.png);   
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content {
    padding-left: 12rem;
  }

  button {
    height: 48px;
    border: none;
    min-width: 120px;
    font-weight: bold;
    font-size: 16px;
  } 

  .fullname {
    font-size: 72px;
  }

  .role-description {
    font-size: 24px;
    font-weight: 200;
  }

  .btn-download-cv {
    background: none;
    border: 3px solid var(--theme-color);
  }

</style>