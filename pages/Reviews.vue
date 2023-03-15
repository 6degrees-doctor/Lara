<template>
    <div>
         <div class="container p-5">
            <div class="row p-3 d-flex justify-content-center">
                <div class="col-sm-2 col-lg-2 ">
                    <img src="~/assets/img/card4.png" class="img-fluid" alt="">
                </div>
                <div class="col-sm-4 col-lg-4">
                    <h2 class="fs-2 fs-sm-3 fw-bold" >Dr. Mona Eidgah  Reviews</h2> 
                  <p class="card-text"><i class="bi bi-journal-medical text-dark "></i> Dr. Mona Eidgah is a Dentistry Practitioner in Riyadh</p>
                <div class="row align-items-start">
                    <div class="col">
                        <h2 class="fw-bold">4.5</h2>
                    </div>
                    <div class="col-sm-9 col-lg-10 ">
                        <p class="card-text text-color">Based on 38 ratings</p>
                                <i class="bi bi-star-fill star"></i>
                                <i class="bi bi-star-fill star"></i>
                                <i class="bi bi-star-fill star"></i>
                                <i class="bi bi-star-fill star"></i>
                                <i class="bi bi-star-half star"></i> 
                            </div>
                         </div>

                </div>
            </div>   

            <!---------------  PROGRESS BAR ---------------->
                 <div class="container w-50 my-2 " >
                <div class="row ">
                <!-- rate 1 -->
                    <div class="col-2 text-dark">5 Star</div>
                    <div class="col-2 w-75">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar  bg-warning" style="width: 80%"></div>
                        </div></div>

                <!-- rate 2 -->
                <div class="col-2 text-dark">4 Star</div>
                    <div class="col-2  w-75">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar  bg-warning" style="width: 20%"></div>
                        </div></div>
                <!-- rate 3 -->
                <div class="col-2  text-dark">3 Star</div>
                    <div class="col-2  w-75">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar  bg-warning" style="width: 39%"></div>
                        </div></div> 

                <!-- rate 4 -->
                <div class="col-2  text-dark">2 Star</div>
                    <div class="col-2 w-75">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                        <div class="progress-bar  bg-warning" style="width: 50%"></div>
                        </div></div>

                <!-- rate 5 -->
                <div class="col-2 text-dark">1 Star</div>
                    <div class="col-2 w-75">
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> 
                        <div class="progress-bar  bg-warning" style="width: 15%"></div>
                        </div></div>

                </div>
                </div>  </div>
                
           <!---------------- Write a review Section ---------------->
           <div class="bg-color container align-items-center px-5 py-4 my-5  ">
                            <form>
                        <div class="row ">
                         <div class="col">
                            <div class="mb-3 ">
                        <h2 class="fw-bold fs-sm-3 my-2">Leave a review </h2>
                        <h2 class="fs-3 ">How likely are you to recommend Dr.Mona? </h2>
                        <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                        </div>

                    <label for="exampleInputEmail1" class="form-label"> <h5>Title *</h5></label>
                    <input type="text" class="form-control" placeholder="Write your title ..."  id="exampleInputTitle" required >
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPMessage" class="form-label"> <h5>Tell us more about your visit *</h5></label>
                        <textarea class="form-control" placeholder="Write your message ..."  aria-label="With textarea" required></textarea>
                    </div>
            
                    <div class="d-flex gap-3 float-end py-4">
                      
                            <!-- Button trigger modal -->
                <h5 class="fs-5"><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    class="text-reset">Leave review as anonymous?</a></h5>


                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">Write your comment as Anonymous</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                       <div class="col-md-4">
                        <label for="exampleInputEmail1" class="form-label"><h5>Title *</h5></label>
                    <input type="text" class="form-control" placeholder="Write your title ..."  id="exampleInputTitle2" required >
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPMessage" class="form-label"><h5>Tell us more about your visit *</h5></label>
                        <textarea class="form-control" placeholder="Write your message ..."  aria-label="With textarea" 
                        required></textarea>


                    </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn  btn-color btn-md">Send Message</button>
                    </div>
                    </div>
                </div>
                </div>
                        
                    <button type="submit" class="btn btn-color">Submit</button>
                    </div>

                    
                            </div>
                        </div>
                    </form>
                    </div>

         <!------------------ Reviews Section  ----------------------->
         <div class=" bg-color container px-5 py-4 my-5">
                        <div class="row ">
                         <div class="col">
                        <div class="mb-3 ">
                            <h2 class="fw-bold">Reviews</h2>

                    <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-2 ">
                        <img src="~/assets/img/profilePic.jpg" class="img-fluid p-3" style="width: 10rem;" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body ">
                            <h5 class="card-title text-dark fw-bold">Sultan Mohammed </h5>
                            <div class="my-3"><i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i></div>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>
                        </div>
                        </div>
                        <!--------- Secound comment ---------->
                        <div class="row ">
                         <div class="col">
                        <div class="mb-3 ">

                    <div class="card mb-3" >
                    <div class="row g-0">
                        <div class="col-md-2">
                        <img src="~/assets/img/anonymous-profile.png" class="img-fluid p-3" style="width: 10rem;" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body ">
                            <h5 class="card-title text-dark fw-bold">Anonymous</h5>
                            <div class="my-3"><i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i>
                            <i class="bi bi-star-fill star"></i></div>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                        </div>
                        </div>
                        </div>
                        
                </div>

         
                <!-- {{ this.comments.data[0].attributes.Title }}
                {{ this.comments.data[0].attributes.Message }} -->
                <!-- {{ this.comments.data.data[0] }} -->

    </div>
</template>

<!-- <script>

export default {

    data(){
        return {
            comments: [],
        }
    },
    async mounted(){
          try {
            // fetch data from strapi
            const comments = await fetch('http://localhost:1337/api/comments')
            const newData = await comments.json();
            this.comments = newData;
          } catch (error) {
            console.log(error)
          }
        }
    }
</script>  -->