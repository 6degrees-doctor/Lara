<template>
    <div>
      <section class="vh-100">
    <div class="container py-5 ">
      <div class="row d-flex align-items-center justify-content-center ">
        <div class="col-md-7 col-lg-5 col-xl-5 ">
          <form @submit="createUser">
            <div v-show="error !== ''" class="p-3 border">
         <p>{{ error }}</p>
            </div>
            <h1 class="fw-bold text-center">Create  Account,To Get Started Now</h1>
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

              <!-- Confirm Password input -->
              <div class="form-outline mb-4">
              <label class="form-label" for="form1Example23"><h5>Confirm Password</h5></label> 
              <input type="password" id="form1Example23"  v-model="confirmPassword"
              placeholder="Confirm Your Password" class="form-control form-control" />
            </div>
            <div class="d-grid">
              <a class="btn btn-color btn-lg" href="#" role="button">Signup</a>
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
    data() {
      return {
        email: '',
        password: '',
        confirmPassword: '',
        error: '',
      }
    },
    methods: {
      async createUser(e) {
        e.preventDefault()
        try {
          const newUser = await this.$strapi.register({
            email: this.email,
            username: this.password,
            password: this.confirmPassword,
          })
          console.log(newUser)
          if (newUser !== null) {
            this.error = ''
            this.$nuxt.$router.push('/index')
          }
        } catch (error) {
          this.error = error.message
        }
      },
    },
  }
  </script>