'use client';
import { useEffect } from 'react';
import Image from "next/image";

// Carousel Component
function Carousel() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade mb-5 shadow-lg rounded"
      data-bs-ride="carousel"
      style={{ backgroundColor: '#cceeff', filter: 'brightness(1.1)' }} // สีฟ้าอ่อน
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src="/ff.jpg" className="d-block w-100 rounded" alt="Slide 1" width={1920} height={850} priority />
        </div>
        <div className="carousel-item">
          <Image src="/dd.jpg" className="d-block w-100 rounded" alt="Slide 2" width={1920} height={850} />
        </div>
        <div className="carousel-item">
          <Image src="/vv.jpg" className="d-block w-100 rounded" alt="Slide 3" width={1920} height={850} />
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
  const cards = [
    { img: '/cc.jpg', title: 'Project 1', desc: 'Bright and colorful project 1' },
    { img: '/zz.jpg', title: 'Project 2', desc: 'Amazing project 2' },
    { img: '/xx.jpg', title: 'Project 3', desc: 'Creative project 3' },
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: '#cceeff', padding: '2rem 0' }}>
      <div className="row">
        <div className="col-md-12 text-center mb-4">
          <h3 className="text-primary fw-bold" style={{ textShadow: '2px 2px 5px #aaa' }}>Our Projects</h3>
        </div>
      </div>
      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card shadow-lg border-0 rounded"
              style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              <img src={card.img} className="card-img-top rounded" alt={card.title} style={{ filter: 'brightness(1.1)' }} />
              <div className="card-body text-center">
                <h5 className="card-title text-success">{card.title}</h5>
                <p className="card-text text-muted">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="container-fluid mt-5 shadow-sm" style={{ backgroundColor: '#cceeff', boxShadow: '0 -5px 10px rgba(0,0,0,0.1)' }}>
      <footer className="py-5">
        <div className="row">
          {[1, 2, 3].map((_, index) => (
            <div className="col-6 col-md-2 mb-3" key={index}>
              <h5 className="text-primary fw-bold" style={{ textShadow: '1px 1px 3px #ccc' }}>Section</h5>
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
              <h5 className="text-primary fw-bold" style={{ textShadow: '1px 1px 2px #aaa' }}>Subscribe to our newsletter</h5>
              <p className="text-muted">Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control shadow-sm"
                  placeholder="Email address"
                  style={{ borderRadius: '8px' }}
                />
                <button
                  className="btn btn-primary shadow-sm"
                  type="button"
                  style={{ borderRadius: '8px', transition: 'all 0.3s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  Subscribe
                </button>
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
