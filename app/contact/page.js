'use client';
import { useEffect } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const socials = [
    {
      name: 'Facebook',
      icon: <FaFacebook />,
      url: 'https://www.facebook.com/suphakit.ploydang',
      color: '#d4af37', // สีทอง
      hoverGlow: '0 0 20px #d4af37, 0 0 30px #d4af37, 0 0 40px #d4af37',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/stxwitx',
      color: '#d4af37', // สีทอง
      hoverGlow: '0 0 20px #d4af37, 0 0 30px #d4af37, 0 0 40px #d4af37',
    },
  ];

  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h1
            className="fw-bold"
            style={{
              color: '#d4af37',
              textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
              fontSize: '3rem',
            }}
          >
            ติดต่อเรา
          </h1>
          <p className="text-light" style={{ fontSize: '1.2rem' }}>
            สามารถติดตามหรือสอบถามข้อมูลเพิ่มเติมผ่านช่องทางด้านล่าง
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {socials.map((social, index) => (
            <div className="col-md-4" key={index}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex flex-column align-items-center justify-content-center p-5 rounded shadow-lg"
                style={{
                  backgroundColor: '#123d2f',
                  color: social.color,
                  border: '2px solid #d4af37', // กรอบสีทอง
                  transition: 'transform 0.3s, box-shadow 0.3s, color 0.3s',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = social.hoverGlow;
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
                  e.currentTarget.style.color = social.color;
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{social.icon}</div>
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{social.name}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="container-fluid mt-5"
          style={{ backgroundColor: '#0d3b2e', boxShadow: '0 -5px 20px rgba(0,0,0,0.4)' }}
        >
          <footer className="py-5 text-light text-center">
            <p>© 2025 Rolex Store, Inc. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
