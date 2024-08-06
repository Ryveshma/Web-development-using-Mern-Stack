import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
      return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Online Food Shop</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
          {/* Font Awesome */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"><img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/06/Food-Logo-Design-1-2048x1152.jpg" height="50px" width="50px" style={{borderRadius: '50%'}} /></a>
              <h1 style={{color: 'bisque'}}>Food Order</h1>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Menu</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact Us</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                </form>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          {/* Deal of the Day */}
          <div className="container my-5">
            <h1 className="display-7 text-danger mb-1 text-center">Deal of the day</h1>
            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png" style={{height: '400px', width: '600px', backgroundSize: '100% 100%'}} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://b.zmtcdn.com/data/o2_assets/69963815381d03505031ca97cc396b871687856789.png" style={{height: '400px', width: '600px'}} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://th.bing.com/th/id/OIP.YBLlu7ibeQng-9fXISncxgHaE8?w=296&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Third slide" style={{height: '400px', width: '600px'}} />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
            {/* End Carousel */}
          </div>
          {/* End Deal of the Day */}
          {/* Featured Products */}
          <div className="container text-center my-5">
            <h1 className="display-4 text-danger mb-5">Featured products</h1>
            <div className="row justify-content-center">
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="https://imgs.search.brave.com/FsUTBc-F2IwhzhLlfnAIU2hy9Gh2Y9fEeJCqWlFmELM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9kZXRhaWwtb2Yt/c2FsYW1pLXBpenph/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA" alt="Product 1" />
                  <div className="card-body">
                    <a href="#" className="btn btn-warning">Order now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="https://imgs.search.brave.com/drE2k1ocg12Y53Mk17obz07FYMWuQc6-Y0A33Texf_k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/NzM2MjMzNC9waG90/by90YXN0eS1idXR0/ZXItY2hpY2tlbi1j/dXJyeS1kaXNoLWZy/b20taW5kaWFuLWN1/aXNpbmUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVppcHFZ/T1VySGdkaGZMR0VQ/a29mTDVvZ2RHYTZ6/ajRTeVltWVJvRE43/M1E9" alt="Product 2" />
                  <div className="card-body">
                    <a href="#" className="btn btn-warning">Order now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="card">
                  <img className="card-img-top" src="https://th.bing.com/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Product 3" />
                  <div className="card-body">
                    <a href="#" className="btn btn-warning">Order now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Featured Products */}
          {/* Our Specialties */}
          <section className="bg-light py-5">
            <div className="container">
              <h2 className="text-center text-danger mb-5">Our Specialties</h2>
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrZQK0BNyL3pHWXxGd-AHcHnVd9oAPWfk49A&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Biryani</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquid quis suscipit. Repellat saepe delectus officia. Tenetur voluptatum minus beatae a quisquam omnis rerum culpa!</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKg9KfUIULS3oJcZqNJj84qPx5Un5Hri0UQ&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Pasta</h5>
                      <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat dolor, maxime omnis eius fugit maiores sed iusto ad enim cum id, doloribus reiciendis reprehenderit similique.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card">
                    <img height="300px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8FFccsywXb2LXR0b-UUI7iWVPsl001Z6olw&usqp=CAU" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Cheesecake</h5>
                      <p className="card-text">Cheesecake is a dessert made with a soft fresh cheese, eggs, and sugar. It may have a crust or base made from crushed cookies, graham crackers, pastry, or sometimes sponge cake.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Our Specialties */}
          {/* Subscribe to Newsletter */}
          <section className="bg-light py-5">
            <div className="container">
              <h2 className="text-center text-danger mb-5">Subscribe to Newsletter</h2>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <form>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
                      <button className="btn btn-danger" type="button" id="button-addon2">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Subscribe to Newsletter */}
          {/* Footer */}
          <footer className="bg-dark text-light py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h5>Follow Us</h5>
                  <div className="social-icons">
                    <a href="#"><i className="fab fa-facebook-f pr-2" /></a>
                    <a href="#"><i className="fab fa-twitter pr-2" /></a>
                    <a href="#"><i className="fab fa-instagram pr-2" /></a>
                    <a href="#"><i className="fab fa-linkedin" /></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <h5>Contact Us</h5>
                  <ul className="list-unstyled">
                    <li>Email: contact@example.com</li>
                    <li>Phone: +91-9911009889</li>
                    <li>Address: 123 Street, Hyderabad, India</li>
                  </ul>
                </div>
              </div>
              <hr className="bg-light" />
              <p className="mb-0 text-center">© 2021 Online Food Shop. All rights reserved.</p>
            </div>
          </footer>
          {/* End Footer */}
        </div>
      );
    }
  
  export default Home;