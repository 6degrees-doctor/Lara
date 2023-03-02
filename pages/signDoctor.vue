<template>
  <div>
    <section class="vh-100">
  <div class="container py-5 ">
    <div class="row d-flex align-items-center justify-content-center ">
      <div class="col-md-7 col-lg-5 col-xl-5 ">
        <form>
          <h1 class="fw-bold text-center">Welcome Back !!</h1>
          <!-- Email input -->
          <div class="form-outline mb-4 my-4">
            <label class="form-label" for="form1Example13"><h5>Enter Email</h5></label>
            <input type="email" id="form1Example13"  placeholder="Enter Your Password" class="form-control form-control" />
          </div>

          <!-- Password input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form1Example23"><h5>Enter Password</h5></label> 
            <input type="password" id="form1Example23" placeholder="Enter Your Password" class="form-control form-control" />
          </div>
          


          <div class="d-grid">
                 <!-- Button trigger modal -->
                    <a class="btn btn-color fw-bold btn-lg" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    role="button">Login</a>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title fw-bold" id="exampleModalLabel">Authentcation Code Sent:</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body ">
                       <p>Enter the 4-digits code sent to your e-mail</p>
                       <div class="col-md-5  gap-3 d-flex justify-content-evenly">
                        <input type="text" class="form-control px-3" id="inputCode">
                        <input type="text" class="form-control px-3" id="inputCode">
                        <input type="text" class="form-control px-3" id="inputCode">
                        <input type="text" class="form-control px-3" id="inputCode">
                    </div>
                    </div>

                    <div class="modal-footer d-flex justify-content-center">
                      <button type="button"  class="btn btn-color px-4 fw-bold btn-lg">Verify</button> 
                    </div>
                    </div>
                </div>
                </div>
            <h5 class="text-dark text-center my-5">Or Login With:</h5>
          <div class="bg-color d-flex justify-content-around py-3">
            <a  href="https://www.google.com"><img src="~/assets/img/google.png"  style="height: 5rem;" alt=""></a>
            <a  href="#"><img src="~/assets/img/linkedin.png"  style="height: 5rem;" alt=""></a>
          </div>
          </div>
          
</form>
</div>
</div>
  </div>
  
    </section>


    
  </div>
</template>