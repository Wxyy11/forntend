'use client';
import Image from 'next/image';
import { FaGem } from 'react-icons/fa';

const watches = [
  {
    img: '/rolex1.jpg',
    title: 'Rolex Submariner',
    desc: 'Classic luxury diving watch with timeless elegance.',
    price: '฿450,000',
  },
  {
    img: '/rolex2.jpg',
    title: 'Rolex Daytona',
    desc: 'Prestigious chronograph crafted with precision.',
    price: '฿550,000',
  },
  {
    img: '/rolex3.jpg',
    title: 'Rolex Datejust',
    desc: 'Iconic design blending tradition and modernity.',
    price: '฿480,000',
  },
];

export default function LuxurySale() {
  return (
    <div style={{ backgroundColor: '#0d3b2e', minHeight: '100vh', padding: '3rem 0' }}>
      <div className="container text-center">
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
                  <h5 className="card-title" style={{ color: '#d4af37' }}>
                    {watch.title}
                  </h5>
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
                  >
                    ดูรายละเอียด
                  </button>
                </div>
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
