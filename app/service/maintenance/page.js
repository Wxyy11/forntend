'use client';
import { FaClock, FaTint, FaTools, FaCheck, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Maintenance() {
  const steps = [
    {
      title: '1. ตรวจเช็คสภาพนาฬิกา',
      desc: 'ตรวจสอบสภาพนาฬิกาและการทำงานของกลไกทุกชิ้นส่วน',
      icon: <FaClock />,
    },
    {
      title: '2. ทำความสะอาดภายนอกและภายใน',
      desc: 'ทำความสะอาดสาย, ตัวเรือน และกลไกภายในอย่างละเอียด',
      icon: <FaTint />,
    },
    {
      title: '3. บำรุงและปรับแต่งกลไก',
      desc: 'เติมน้ำมันหล่อลื่นและปรับแต่งความแม่นยำของนาฬิกา',
      icon: <FaTools />,
    },
    {
      title: '4. ตรวจสอบคุณภาพ',
      desc: 'ทดสอบการทำงานและความแม่นยำก่อนส่งคืนลูกค้า',
      icon: <FaCheck />,
    },
  ];

  const contacts = [
    {
      title: 'Facebook',
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/suphakit.ploydang',
    },
    {
      title: 'Instagram',
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/stxwitx',
    },
  ];

  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container text-center">
        {/* Header */}
        <h1
          style={{
            color: '#d4af37',
            fontSize: '3rem',
            textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          ดูแลรักษานาฬิกา
        </h1>
        <p className="text-light mt-3 mb-5" style={{ fontSize: '1.2rem' }}>
          บริการดูแลรักษานาฬิกาหรูอย่างครบวงจร ให้เหมือนใหม่ พร้อมขั้นตอนมาตรฐาน
        </p>

        {/* Steps */}
        <div className="row justify-content-center g-4">
          {steps.map((step, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="d-flex flex-column align-items-center justify-content-center p-4 rounded shadow-lg mx-auto"
                style={{
                  backgroundColor: '#123d2f',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  minHeight: '300px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
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
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{step.icon}</div>
                <h4 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  {step.title}
                </h4>
                <p className="text-light text-center">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <h2
          className="text-center mt-5 mb-4"
          style={{
            color: '#d4af37',
            fontSize: '2rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(0,0,0,0.6)',
          }}
        >
          ช่องทางติดต่อ
        </h2>

        <div className="row justify-content-center g-4">
          {contacts.map((contact, index) => (
            <div className="col-md-4" key={index}>
              <Link
                href={contact.href}
                target="_blank"
                className="d-flex flex-column align-items-center justify-content-center p-4 rounded shadow-lg text-decoration-none"
                style={{
                  backgroundColor: '#123d2f',
                  border: '2px solid #d4af37',
                  color: '#d4af37',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  minHeight: '200px',
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
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{contact.icon}</div>
                <h5 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>{contact.title}</h5>
                <p className="text-light text-center mt-2">{contact.info}</p>
              </Link>
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
