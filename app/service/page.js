'use client';
import Link from 'next/link';
import { FaCogs, FaClock, FaGem } from 'react-icons/fa';

export default function Service() {
  const services = [
    {
      title: 'ซ่อมนาฬิกา',
      desc: 'บริการซ่อมและปรับแต่งนาฬิกาหรูด้วยช่างผู้เชี่ยวชาญ',
      icon: <FaCogs />,
      href: '/service/repair',
    },
    {
      title: 'ดูแลรักษา',
      desc: 'บริการทำความสะอาดและบำรุงนาฬิกาให้เหมือนใหม่',
      icon: <FaClock />,
      href: '/service/maintenance',
    },
    {
      title: 'ขายนาฬิกาหรู',
      desc: 'คอลเลกชันนาฬิกา Rolex และนาฬิกาหรูระดับพรีเมียม',
      icon: <FaGem />,
      href: '/service/luxury-sale',
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
            บริการของเรา
          </h1>
          <p className="text-light" style={{ fontSize: '1.2rem' }}>
            เรามีบริการครบวงจรสำหรับนาฬิกาหรูทุกแบรนด์
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <Link
                href={service.href}
                className="d-flex flex-column align-items-center justify-content-center p-5 rounded shadow-lg text-decoration-none"
                style={{
                  backgroundColor: '#123d2f',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  height: '350px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 20px #d4af37aa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
                }}
              >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h5 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{service.title}</h5>
                <p className="text-light text-center mt-2">{service.desc}</p>
              </Link>
            </div>
          ))}
        </div>

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
