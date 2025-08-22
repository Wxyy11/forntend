'use client';
import { FaCogs, FaSearch, FaTools, FaCheck } from 'react-icons/fa';

export default function Repair() {
  const steps = [
    {
      title: '1. ตรวจสอบเบื้องต้น',
      desc: 'ตรวจสอบสภาพนาฬิกาและระบุปัญหาอย่างละเอียด',
      icon: <FaSearch />,
    },
    {
      title: '2. แก้ไขและซ่อมแซม',
      desc: 'ช่างผู้เชี่ยวชาญทำการซ่อมและปรับแต่งทุกชิ้นส่วนอย่างระมัดระวัง',
      icon: <FaTools />,
    },
    {
      title: '3. ตรวจสอบคุณภาพ',
      desc: 'ทดสอบการทำงานและความแม่นยำก่อนส่งคืนลูกค้า',
      icon: <FaCheck />,
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
          ซ่อมนาฬิกา
        </h1>
        <p className="text-light mt-3 mb-5" style={{ fontSize: '1.2rem' }}>
          บริการซ่อมและปรับแต่งนาฬิกาหรูด้วยช่างผู้เชี่ยวชาญ พร้อมขั้นตอนมาตรฐานเพื่อคุณภาพสูงสุด
        </p>

        {/* Steps */}
        <div className="row justify-content-center g-4">
          {steps.map((step, index) => (
            <div className="col-md-4" key={index}>
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
