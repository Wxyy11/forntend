'use client';
import { useEffect } from 'react';
import Image from "next/image";

// Carousel Component
function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div id="carouselExample" className="carousel slide carousel-fade mb-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/ff.jpg" className="d-block w-100" alt="Slide 1" width={1920} height={850} priority />
        </div>
        <div className="carousel-item">
          <Image src="/dd.jpg" className="d-block w-100" alt="Slide 2" width={1920} height={850} />
        </div>
        <div className="carousel-item">
          <Image src="/vv.jpg" className="d-block w-100" alt="Slide 3" width={1920} height={850} />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// Card Section Component
function CardSection() {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 text-center mb-4"></div>
            <div className="col-md-12 text-center mb-4">
                <h3>Our Project</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card">
                <img src="/cc.jpg" className="card-img-top img-responsive" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>

            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/zz.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
            <div className="card">
                <img src="/xx.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                </div>
                </div>
            </div>
      </div>
    </div>
    );
  }

// Footer Component
function Footer() {
  return (
    <div className="container-fluid bg-light mt-5">
      <footer className="py-5">
        <div className="row">
          {[1, 2, 3].map((_, index) => (
            <div className="col-6 col-md-2 mb-3" key={index}>
              <h5>Section</h5>
              <ul className="nav flex-column">
                {["Home", "Features", "Pricing", "FAQs", "About"].map((item, i) => (
                  <li className="nav-item mb-2" key={i}>
                    <a href="#" className="nav-link p-0 text-body-secondary">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="email" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2025 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Instagram">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#" aria-label="Facebook">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <>
      <Carousel />
      <CardSection />
      <Footer />
    </>
  );
}
