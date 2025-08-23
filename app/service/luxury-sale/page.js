'use client';
import Image from 'next/image';
import { useState } from 'react';

const watches = [
  {
    img: '/rolex1.jpg',
    title: 'Rolex Submariner',
    desc: 'Classic luxury diving watch with timeless elegance.',
    price: '฿450,000',
    details: 'นาฬิกาดำน้ำระดับตำนาน มาพร้อมความเที่ยงตรงสูงและความทนทานต่อแรงดันน้ำลึก 300 เมตร',
  },
  {
    img: '/rolex2.jpg',
    title: 'Rolex Daytona',
    desc: 'Prestigious chronograph crafted with precision.',
    price: '฿550,000',
    details: 'โครโนกราฟระดับพรีเมียม เหมาะสำหรับนักแข่งและคนรักความแม่นยำสูง',
  },
  {
    img: '/rolex3.jpg',
    title: 'Rolex Datejust',
    desc: 'Iconic design blending tradition and modernity.',
    price: '฿480,000',
    details: 'ดีไซน์คลาสสิกที่ผสมผสานความทันสมัยกับความเป็นเอกลักษณ์ของ Rolex',
  },
];

export default function LuxurySale() {
  const [selectedWatch, setSelectedWatch] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (watch) => {
    setSelectedWatch(watch);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelectedWatch(null), 400); // รอ animation ก่อนลบ state
  };

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
          ขายนาฬิกาหรู
        </h1>
        <p className="text-light mt-3 mb-5" style={{ fontSize: '1.2rem' }}>
          คอลเลกชันนาฬิกา Rolex และนาฬิกาหรูระดับพรีเมียม พร้อมบริการหลังการขาย
        </p>

        {/* Watch Cards */}
        <div className="row justify-content-center g-4">
          {watches.map((watch, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card border-0 rounded shadow-lg"
                style={{
                  backgroundColor: '#123d2f',
                  border: '2px solid #d4af37',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  height: '450px',
                  display: 'flex',
                  flexDirection: 'column',
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
                <div style={{ flex: '1 0 auto', position: 'relative' }}>
                  <Image
                    src={watch.img}
                    alt={watch.title}
                    fill
                    style={{
                      objectFit: 'cover',
                      borderTopLeftRadius: '0.5rem',
                      borderTopRightRadius: '0.5rem',
                    }}
                  />
                </div>
                <div className="card-body text-center" style={{ flex: '0 0 auto' }}>
                  <h5 className="card-title" style={{ color: '#d4af37' }}>{watch.title}</h5>
                  <p className="card-text text-light">{watch.desc}</p>
                  <p className="fw-bold text-warning">{watch.price}</p>
                  <button
                    className="btn mt-2"
                    style={{
                      backgroundColor: '#d4af37',
                      color: '#0d3b2e',
                      fontWeight: 'bold',
                      borderRadius: '8px',
                    }}
                    onClick={() => openModal(watch)}
                  >
                    ดูรายละเอียด
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Watch Detail Modal */}
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: showModal ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0)',
            transition: 'background-color 0.4s ease',
            zIndex: 1050,
            pointerEvents: showModal ? 'auto' : 'none',
          }}
          onClick={closeModal}
        >
          {selectedWatch && (
            <div
              className="card p-4 d-flex flex-column align-items-center"
              style={{
                maxWidth: '500px',
                border: '2px solid #d4af37',
                backgroundColor: '#123d2f',
                color: '#fff',
                boxShadow: showModal
                  ? '0 0 60px 15px rgba(212,175,55,0.8), 0 20px 50px rgba(212,175,55,0.6)'
                  : '0 20px 50px rgba(0,0,0,0.3)',
                borderRadius: '1rem',
                transform: showModal ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                opacity: showModal ? 1 : 0,
                transition: 'all 0.4s ease',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ color: '#d4af37', marginBottom: '1rem' }}>{selectedWatch.title}</h3>

              {/* Image wrapper */}
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Image
                  src={selectedWatch.img}
                  alt={selectedWatch.title}
                  width={400}
                  height={250}
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              </div>

              <p>{selectedWatch.details}</p>
              <p className="fw-bold text-warning">{selectedWatch.price}</p>
              <button
                className="btn mt-2"
                style={{
                  backgroundColor: '#d4af37',
                  color: '#0d3b2e',
                  fontWeight: 'bold',
                  borderRadius: '8px',
                }}
                onClick={closeModal}
              >
                ปิด
              </button>
            </div>
          )}
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
