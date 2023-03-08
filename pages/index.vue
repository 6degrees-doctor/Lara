<template>
  <div>
    <!----image section--->
    <section> 
    <div class="hero">
    <div class="centered">
    <h1 class="head1 display-1 fw-bolder">Choose Your <br>
    Preferred Doctor</h1>
    <div class="d-grid gap-2 d-md-flex justify-content-md-start">
    <a class="btn btn-color text-center fw-bold btn-lg" href="register" role="button">Register</a>
    <a class="btn btn-color fw-bold btn-lg" href="signDoctor" role="button">Sign as doctor</a>
    </div>

  </div> </div>
</section>
   
  <!-- Serach box -->
<div class="container position-absolute bottom-0 start-50 translate-middle-x rectangle-search py-4">
    <div class="row ">
  <div class="card ">
    <div class="card-body">
      <h2 class="fw-bold fs-sm-3">Find A Doctor - by 6degrees</h2>
      
    <div class="col-sm-7 col-lg-12 ">
      <input class="form-control " list="datalistOptions" id="exampleDataList" 
        placeholder="Search for doctor’s name, departments ...">
        <datalist id="datalistOptions" ><button  class="btn btn-color btn-lg">Search</button>
        <option value="Dr. Mona Eidgah"></option>
        <option value="Pharmacy Department"></option>
        <option value="Radiology Department (X-ray) Department"></option>
        <option value="Therapy Department"></option>
        <option value="Dentist Department"></option>
      </datalist>
    </div>
    </div>
  </div>
    </div>
</div>


 <!---- About us Section ------>
 <section class="bg-color" id="about">
<div class=" container">
  <div class="row ">
    <div class="col">
      <h2 class="fs-1 fs-sm-3 text-center fw-bold my-5" >Finding the Right Care Matters</h2> 
    </div>
  </div>
    <div class="row">
    <div class="col-sm my-5" >
       <p class="fw-lighter ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div class="col">
            <img src="~/assets/img/aboutus .png" class="img-fluid mt-5 " alt="">

    </div>

  </div>
</div>
 </section> 


 <!-- Most Rated Doctors -->
<section class=" my-5 ">
  <h1 class="text-center my-5 fw-bold">Meet Our Most Rated Doctor</h1>
  <div class="container ">
    <div class="row">
   <!-- Doctors No.1 -->
  <div class="col d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img src="~/assets/img/card1.png" class="card-img-top" alt="...">
  <div class="card-body">
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>

    <p class="card-title fw-bold">Dr. Josef  Belz</p>
    <p class="card-text text-color">Dentistry Practitioner in Riyadh.</p>
    <a class="btn btn-outline-secondary" href="Reviews" role="button">Write a review</a>
  </div>
  </div>
      </div>

<!-- Doctors No.2 -->
<div class="col d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img src="~/assets/img/card2.png" class="card-img-top" alt="...">
  <div class="card-body">
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>

    <p class="card-title fw-bold">Dr. Matthew Pabis</p>
    <p class="card-text text-color"> Emergency medicine  in Riyadh.</p>
    <a class="btn btn-outline-secondary" href="reviews" role="button">Write a review</a>
  </div>
  </div>  
</div>

    <!-- Doctors No.3 -->
    <div class="col d-flex justify-content-center">
    <div class="card" style="width: 18rem;">
  <img src="~/assets/img/card3.png" class="card-img-top" alt="...">
  <div class="card-body">
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>

    <p class="card-title fw-bold">Dr. Mona Eidgah</p>
    <p class="card-text text-color">Medical genetics  in Riyadh.</p>
    <a class="btn btn-outline-secondary" href="reviews" role="button">Write a review</a>
  </div>
  </div>
  
</div>
  <!-- Doctors No.4 -->
  <div class="col d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
  <img src="~/assets/img/card4.png" class="card-img-top" alt="...">
  <div class="card-body">
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>
    <i class="bi bi-star-fill star"></i>

    <p class="card-title fw-bold">Dr.Anele Slezinger</p>
    <p class="card-text text-color">Anesthesiology in Riyadh.</p>
    <a class="btn btn-outline-secondary" href="reviews" role="button">Write a review</a>
  </div>
  </div>
</div>
  </div>
 </div>
</section>




  </div>  
</template>

