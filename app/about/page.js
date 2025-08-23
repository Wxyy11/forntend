'use client';

import { useEffect } from 'react';
import { FaCrown, FaClock } from 'react-icons/fa';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

// ✅ About Page
export default function AboutPage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* ✅ Hero Section */}
      <div
        className="text-center text-light d-flex flex-column justify-content-start align-items-center"
        style={{
          background: 'linear-gradient(160deg, #0d3b2e, #000000)',
          minHeight: '100vh',
          position: 'relative',
          paddingTop: '6rem', // ✅ ขยับขึ้น
          paddingBottom: '3rem',
        }}
      >
        {/* faint background pattern */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: "url('/watch-pattern.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.07,
          }}
        ></div>

        {/* Title */}
        <h1
          className="fw-bold mb-3"
          style={{
            color: '#d4af37',
            textShadow: '2px 2px 12px rgba(0,0,0,0.8)',
            letterSpacing: '2px',
            zIndex: 10,
          }}
        >
          <FaCrown className="me-2 text-warning" />
          เกี่ยวกับเรา
        </h1>

        {/* Divider */}
        <div
          className="mb-4"
          style={{
            width: '120px',
            height: '4px',
            backgroundColor: '#d4af37',
            boxShadow: '0 0 15px rgba(212,175,55,0.8)',
            zIndex: 10,
          }}
        ></div>

        {/* Profile Image */}
        <Image
          src="/dddd.jpg"
          alt="Luxury Watch"
          width={180}
          height={180}
          className="rounded-circle shadow-lg mb-3"
          style={{
            border: '3px solid #d4af37',
            boxShadow: '0 10px 25px rgba(212,175,55,0.6)',
            zIndex: 10,
          }}
        />

        {/* Subtitle */}
        <h2
          className="fw-bold"
          style={{ color: '#d4af37', zIndex: 10 }}
        >
          Rolex – The Crown of Watchmaking
        </h2>

        {/* Description */}
        <div className="mt-4 px-4" style={{ maxWidth: '900px', zIndex: 10 }}>
          <p
            className="fs-5 fw-semibold"
            style={{
              color: '#f5f5f5',
              textShadow: '1px 1px 6px rgba(0,0,0,0.7)',
              lineHeight: '1.8',
            }}
          >
            <FaClock className="me-2 text-warning" />
            <span style={{ color: '#d4af37' }}>Rolex</span> ไม่ใช่เพียงแค่นาฬิกา 
            แต่คือสัญลักษณ์แห่ง{' '}
            <span style={{ color: '#d4af37' }}>ความหรูหรา</span>,{' '}
            <span style={{ color: '#d4af37' }}>ความเที่ยงตรง</span> 
            และ{' '}
            <span style={{ color: '#d4af37' }}>ความเหนือกาลเวลา</span>.
          </p>

          <p
            className="fs-6 mt-3"
            style={{
              color: '#e0e0e0',
              textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
              lineHeight: '1.8',
            }}
          >
            นับตั้งแต่ก่อตั้งขึ้น Rolex ได้สร้างมาตรฐานใหม่ให้กับวงการนาฬิกา
            โดยการผสมผสานระหว่างศิลปะ ความประณีต และเทคโนโลยีขั้นสูง  
            ทุกเรือนผ่านการทดสอบอย่างเข้มงวด เพื่อรับประกันความแม่นยำและความทนทาน  
            ไม่ว่าจะเป็นนักผจญภัย นักดำน้ำ หรือนักธุรกิจ Rolex ได้กลายเป็น
            เพื่อนคู่ใจที่สะท้อนถึงความสำเร็จและรสนิยมอันไร้กาลเวลา
          </p>
        </div>
      </div>

      {/* ✅ Rolex Collection */}
      <div className="container-fluid" style={{ backgroundColor: '#0d3b2e', padding: '4rem 0' }}>
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h3
              className="fw-bold"
              style={{
                color: '#d4af37',
                textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              Rolex Masterpieces
            </h3>
          </div>
        </div>
        <div className="row">
          {[
            {
              img: '/rolex1.jpg',
              title: 'Oyster Perpetual',
              desc: 'จุดเริ่มต้นแห่งนวัตกรรมที่เปลี่ยนโลกนาฬิกา',
            },
            {
              img: '/rolex2.jpg',
              title: 'Submariner',
              desc: 'ตำนานแห่งการดำน้ำ ความแข็งแกร่งเหนือกาลเวลา',
            },
            {
              img: '/rolex3.jpg',
              title: 'Daytona',
              desc: 'สมบูรณ์แบบสำหรับผู้หลงใหลความเร็วและความแม่นยำ',
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
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(212,175,55,0.6)';
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
                    style={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                    }}
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
        <footer className="py-5 text-light text-center">
          <p style={{ color: '#d4af37', textShadow: '1px 1px 6px rgba(0,0,0,0.6)' }}>
            © 2025 Rolex Store, Inc. | Timeless Luxury
          </p>

          {/* Social Links */}
          <div className="d-flex justify-content-center mt-3" style={{ fontSize: '1.5rem' }}>
            <a
              href="https://www.instagram.com/stxwitx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-3"
              style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/suphakit.ploydang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light mx-3"
              style={{ transition: 'color 0.3s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d4af37')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
            >
              <FaFacebook />
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
