<template>
       <div> <!-- Navigation-->
        <nav class="navbar bg-color navbar-expand-lg" >
              <div class="container px-4 px-lg-5">
                  <a href="/"><img class="navbar-brand" src="~/assets/img/ProRate.png" width="18%" height="18%"></a>

                  <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                        <nuxt-link class="nav-link" target="_blank" to="/">Home</nuxt-link>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="#about">About</nuxt-link>
                    </li>
                    <li class="nav-item">
                    <nuxt-link class="nav-link" target="_blank" to="reviews">Reviews</nuxt-link>
                    </li>   
                   <li class="nav-item">
                        <nuxt-link class="nav-link" target="_blank" to="doctorsProfile">Doctor Profile</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" target="_blank" to="register">Register</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" target="_blank" to="signin">Signin </nuxt-link>
                    </li>
                </ul>
                </div>
                  <div id="myNav" class="overlay">
                  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
                  <div class="overlay-content">
                    <nuxt-link class="nav-link" target="_blank" to="/">Home</nuxt-link>
                      <nuxt-link class="nav-link" to="#about">About</nuxt-link>
                      <nuxt-link class="nav-link" target="_blank" to="reviews">Reviews</nuxt-link>
                      <nuxt-link class="nav-link" target="_blank" to="doctorsProfile">Doctor profile</nuxt-link>
                      <nuxt-link class="nav-link" target="_blank" to="register">Register</nuxt-link>
                      <nuxt-link class="nav-link" target="_blank" to="signin">Sign as Doctor</nuxt-link>
                  </div>
                  </div>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">      
                <span style="font-size:40px;cursor:pointer" @click="openNav()">&#9776;</span>
                </button>
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