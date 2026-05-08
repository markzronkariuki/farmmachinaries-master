import React from 'react'

const Carousel = () => {
  return (
<section class="row">
            <div class="col-md-12">
                {/* <!-- a division containing carousel content  --> */}
                <div class="carousel slide" id="mycarousel" data-bs-ride="carousel">
                    {/* <!-- division containing images   --> */}
                    <div class="carousel-inner">
                        {/* <!-- div with image 1  --> */}
                        <div class="carousel-item">
                            <img src="images/d2313bf47264e5aad16515bc9070ef32.jpg" alt="slide1" style={{height:"400px",width:"1200px", objectFit:"cover"}}/>
                        </div>
                        {/* <!-- div with image 2  --> */}
                        <div class="carousel-item">
                            <img src="images/2252e82cf736448d4e474987e5db04b3.jpg" alt="slide1" style={{height:"400px",width:"1200px", objectFit:"cover"}}/>
                        </div>
                        {/* <!-- div with/ image 3  --> */}
                        <div class="carousel-item">
                            <img src="images/250ec8f4de34f59b41ac5f4dfd2cc12b.jpg" alt="slide1" style={{height:"400px",width:"1200px", objectFit:"cover"}}/>
                        </div>
                        {/* <!-- div with image 4  --> */}
                        <div class="carousel-item active">
                            <img src="images/178d9bd35d762085f2a6e234c9848064.jpg" alt="slide1" style={{height:"400px",width:"1200px", objectFit:"cover"}}/>
                        </div>
                    </div>
                    {/* <!-- previos control  --> */}
                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    {/* <!-- next control  --> */}
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                </div>
                </div>
            
        </section>
  )
}

export default Carousel