<template>
       <div> <!-- Navigation-->
<nav class="navbar bg-color navbar-expand-lg" >  
<div class="container ps-5">
  <a href="/"><img class="navbar-brand" src="~/assets/img/ProRate.png" width="18%" height="18%"></a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div id="myNav" class="overlay">
                  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                  <div class="overlay-content">
      <div class="navbar-nav">
        <nuxt-link class="nav-link" target="_blank" to="/">Home</nuxt-link>
                    <nuxt-link class="nav-link" to="#about">About</nuxt-link>
                    <nuxt-link class="nav-link" target="_blank" to="reviews">Reviews</nuxt-link>
                    <nuxt-link class="nav-link" target="_blank" to="doctorsProfile">Doctor profile</nuxt-link>
                    <nuxt-link class="nav-link" target="_blank" to="register">Register</nuxt-link>
                    <nuxt-link class="nav-link" target="_blank" to="signDoctor">Sign as Doctor</nuxt-link>
      </div>
    </div>
      </div>
    </div>
    <span style="font-size:40px;cursor:pointer" @click="openNav()" 
   data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">&#9776;</span>

  </div>
</nav>

</div>
</template>

<script>

export default {
    methods: {
        openNav() {
            document.getElementById("myNav").style.height = "100%";
        },
        closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }
    }
}

</script>