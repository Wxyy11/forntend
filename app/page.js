// app/page.tsx
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function HomePage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* ✅ Carousel */}
      <div
        id="carouselExample"
        className="carousel slide carousel-fade mb-5 shadow-lg rounded"
        data-bs-ride="carousel"
        style={{ backgroundColor: '#0d3b2e', filter: 'brightness(1.05)' }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/111.png"
              className="d-block w-100 rounded"
              alt="Rolex Submariner"
              width={1920}
              height={850}
              priority
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/222.png"
              className="d-block w-100 rounded"
              alt="Rolex Daytona"
              width={1920}
              height={850}
            />
          </div>
          <div className="carousel-item">
            <Image
              src="/333.png"
              className="d-block w-100 rounded"
              alt="Rolex Datejust"
              width={1920}
              height={850}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ✅ Rolex Cards */}
      <div className="container-fluid" style={{ backgroundColor: '#0d3b2e', padding: '3rem 0' }}>
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h3
              className="fw-bold"
              style={{
                color: '#d4af37',
                textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              Our Rolex Collection
            </h3>
          </div>
        </div>
        <div className="row">
          {[
            {
              img: '/rolex1.jpg',
              title: 'Rolex Submariner',
              desc: 'Classic luxury diving watch with timeless elegance.',
            },
            {
              img: '/rolex2.jpg',
              title: 'Rolex Daytona',
              desc: 'Prestigious chronograph crafted with precision.',
            },
            {
              img: '/rolex3.jpg',
              title: 'Rolex Datejust',
              desc: 'Iconic design blending tradition and modernity.',
            },
          ].map((card, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card border-0 rounded shadow-lg"
                style={{
                  backgroundColor: '#123d2f',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  border: '2px solid #d4af37',
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(212,175,55,0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
                }}
              >
                <div style={{ flex: '1 0 auto', position: 'relative' }}>
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    style={{ objectFit: 'cover', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }}
                  />
                </div>
                <div className="card-body text-center" style={{ flex: '0 0 auto' }}>
                  <h5 className="card-title" style={{ color: '#d4af37' }}>{card.title}</h5>
                  <p className="card-text text-light">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Footer */}
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: '#0d3b2e', boxShadow: '0 -5px 20px rgba(0,0,0,0.4)' }}
      >
        <footer className="py-5 text-light">
          <div className="row">
            {[1, 2, 3].map((_, index) => (
              <div className="col-6 col-md-2 mb-3" key={index}>
                <h5
                  style={{
                    color: '#d4af37',
                    textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
                  }}
                >
                  Explore
                </h5>
                <ul className="nav flex-column">
                  {['Home', 'Collections', 'Luxury Care', 'FAQs', 'About'].map((item, i) => (
                    <li className="nav-item mb-2" key={i}>
                      <a href="#" className="nav-link p-0 text-light">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5 style={{ color: '#d4af37' }}>Subscribe to our Newsletter</h5>
                <p className="text-light">Stay updated with our latest Rolex releases.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    style={{ borderRadius: '8px', border: '1px solid #d4af37' }}
                  />
                  <button
                    className="btn"
                    type="button"
                    style={{
                      backgroundColor: '#d4af37',
                      color: '#0d3b2e',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* ✅ Social Links */}
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top border-light">
            <p>© 2025 Rolex Store, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex" style={{ fontSize: '1.5rem' }}>
              <li className="ms-3">
                <a
                  href="https://www.instagram.com/stxwitx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="ms-3">
                <a
                  href="https://www.facebook.com/suphakit.ploydang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  style={{ transition: 'color 0.3s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
