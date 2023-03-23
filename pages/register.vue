<template>
    <div>
      <section class="vh-100">
    <div class="container py-5 ">
      <div class="row d-flex align-items-center justify-content-center ">
        <div class="col-md-7 col-lg-5 col-xl-5 ">
          <form @submit.prevent="userRegister">
            <h1 class="fw-bold text-center">Create Account,To Get Started Now</h1>
            
            <!---- alert message ---->
            <div v-if="err" class="text-danger"
            role="alert" > {{ err }}</div>
           <div v-if="success" class="text-success my-3" role="alert"> Your account has been created successfully you can now  
            <NuxtLink class="font-medium" to="login">Login</NuxtLink> 
          </div>
              <!-- username input -->
              <div class="form-outline mb-4 my-5">
              <label class="form-label" for="form1Example23"><h5>Enter Username</h5></label> 
              <input type="text" id="form1Example24"  v-model="username"
              placeholder="Enter Your Username" class="form-control form-control" />
            </div>

            <!-- Email input -->
            <div class="form-outline mb-4 my-4">
              <label class="form-label" for="form1Example13"><h5>Enter Email</h5></label>
              <input type="email" id="form1Example13"  v-model="email"
               placeholder="Enter Your Email" class="form-control form-control" />
            </div>
  
            <!-- Password input -->
            <div class="form-outline mb-4">
              <label class="form-label" for="form1Example23"><h5>Enter Password</h5></label> 
              <input type="password" id="form1Example23" v-model="password"
              placeholder="Enter Your Password" class="form-control form-control" />
            </div>


            <div class="d-grid">
              <button class="btn btn-color btn-lg" 
              type="submit" name="submit" role="button">Signup</button>
            </div>

            <h5 class="fw-bold text-dark text-center my-5">Or Login With:</h5>
          <div class="bg-color d-flex justify-content-around py-3">
           <img src="~/assets/img/google.png" href="#" style="height: 5rem;" alt="">
           <img src="~/assets/img/linkedin.png" href="#" style="height: 5rem;"  alt="">
          </div>
            
  </form>
  </div>
  </div>
    </div>
      </section>
  
  
      
    </div>
  </template>


<script>
export default {
  auth: 'guest',
  data() {
    return {
      success: false,
      err: null,
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    async userRegister() {
      try {
        this.$axios.setToken(false)
        await this.$axios.post('auth/local/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        this.success = true
      } catch (e) {
        if (e.response) this.err = e.response.data.error.message
      }
    },
  },
}
</script>