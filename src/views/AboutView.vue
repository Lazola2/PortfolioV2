<template>
  <section class="about d-flex">
    <!-- wrapper for the content and the image -->
    <div class="wrapper d-flex w-75 align-items-center justify-content-center">
      <!-- content side -->
      <div class="content text-start d-flex flex-column">
        <h1 class="about-me-heading text-start">ABOUT ME</h1>
        <p class="about-me-paragraph text-start">
          I am a software developer based in Cape Town.
          I love building amazing websites. Navigate to my 
          project section to see some of the amazing websites that I have built. 
          If you have any projects that you need help with, don’t hesitate to contact me.
        </p>
        <button class="hire-me-button">Hire me</button>
      </div>

      <!-- image side -->
      <img class="image" src="https://i.postimg.cc/MZF64KnB/about-lazola.png">
    </div>
  </section>
</template>

<script>
  export default {
  }
</script>

<style scoped>
  .about {
    min-height: 100vh;
    padding-top: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    gap: 32px;
  }

  .about-me-heading {
    font-size: 48px;
  }

  .about-me-paragraph {
    width: 90%;
    font-size: 20px;
  }

  .wrapper {
    padding: 0 5rem;
  }

  .hire-me-button {
    width: 180px;
    border: none;
    background: var(--theme-color);
    height: 56px;
    font-weight: 500;
    color: #fff; 
    font-size: 20px;
  }

  img {
    height: 150%;
  }
  
</style>
