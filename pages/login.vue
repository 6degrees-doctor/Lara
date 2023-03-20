<template>
  <div>
    <section class="vh-100">
  <div class="container py-5 ">
    <div class="row d-flex align-items-center justify-content-center ">
      <div class="col-md-7 col-lg-5 col-xl-5 ">

        <form  @submit.prevent="userLogin">
          <div  v-if="err"
            class="
              p-4
              mb-4
              text-sm text-red-700
              bg-red-100
              rounded-lg
              dark:bg-red-200 dark:text-red-800"
            role="alert" >
            {{ err }}
          </div>
          <h1 class="fw-bold text-center">Welcome Back !!</h1>
          <!-- Email input -->
          <div class="form-outline mb-4 my-4">
            <label class="form-label" for="form1Example13"><h5>Enter Email</h5></label>
            <input v-model="email" type="email" id="form1Example13" 
             placeholder="Enter Your Email" class="form-control form-control" />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23"><h5>Enter Password</h5></label> 
            <input v-model="password" type="password" id="form1Example23" 
            placeholder="Enter Your Password" class="form-control form-control" />
          </div>
          


                 <!-- Button for login -->
                 <div class="d-grid">
              <button class="btn btn-color btn-lg" 
              type="submit" name="submit" role="button">Login</button>
            </div>

            <h5 class="text-dark text-center my-5">Or Login With:</h5>
          <div class="bg-color d-flex justify-content-around py-3">
            <a  href="https://www.google.com"><img src="~/assets/img/google.png"  style="height: 5rem;" alt=""></a>
            <a  href="#"><img src="~/assets/img/linkedin.png"  style="height: 5rem;" alt=""></a>
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
          err: null,
          email: '',
          password: '',
        }
      },
      methods: {
        async userLogin() {
          try {
            await this.$auth.loginWith('local', {
              data: { identifier: this.email, password: this.password },
            })
          } catch (e) {
            if (e.response) this.err = e.response.data.error.message
          }
        },
      },
    }
    </script>