<template>
<nav class="header navbar navbar-expand-lg w-100 d-flex justify-content-between px-3">
    <div class="container-fluid">
        <h2 class="logo text-theme-color">
            <i class="bi bi-code-slash"></i>
        </h2>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon text-white">
        </span> -->
        <i class="bi bi-list toggler"></i>
      </button>
      <div class="collapse navbar-collapse nav-collapse" id="navbarSupportedContent">
        <ul class="d-flex list-unstyled w-100 justify-content-end">
            <!-- router link to HOME page -->
            <router-link to="/">
                <li class="px-4 pt-3 text-theme-color">Home</li>
            </router-link>
            <!-- router link to ABOUT page -->
            <router-link to="/about">
                <li class="px-4 pt-3 text-theme-color">About</li>
            </router-link>
            
            <!-- router link to RESUME page -->
            <router-link to="/resume">
                <li class="px-4 pt-3 text-theme-color">Resume</li>
            </router-link>
            
            <!-- router link to PROJECTS page -->
            <router-link to="/projects">
                <li class="px-4 pt-3 text-theme-color">Projects</li>
            </router-link>
            <!-- router link to TESTIMONIALS page -->
            <router-link to="/testimonials">
                <li class="px-4 pt-3 text-theme-color">Testimonials</li>
            </router-link>
            <!-- router link to projects page -->
            <router-link to="/contact">
                <li class="px-4 pt-3 text-theme-color">Contact</li>
            </router-link>
        </ul>
      </div>
    </div>
</nav>
    
</template>
<script>
export default {
    name: 'NavBar'
}
</script>
<style scoped>
    .header {
        height: 10vh;
        position: fixed;
        z-index: 10000;
    }
    .logo {
        font-size: 35px;
    }
    .toggler {
        font-size: 35px;
        color: var(--theme-color);
    }
    @media screen and (max-width: 800px) {
        .nav-collapse ul {
            display: flex;
            flex-direction: column;
        }
        .nav-collapse ul li {
            padding: 1rem 0;
        }
        .nav-collapse ul li:hover {
            background: #fff;
            width: 100%;
            color: #000;
        }
    }
</style>
